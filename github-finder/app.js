class GitHub {
  constructor() {
    this.client_id = process.env.CLIENT_ID;
    this.client_secret = process.env.CLIENT_SECRET;
    this.token = process.evn.GITHUB_TOKEN;
  }

  async getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${this.token}`,
      },
    });

    const profileData = await response.json();

    return {
      profile: profileData,
    };
  }
}

class UI {
  constructor() {
    this.profileContainer = document.getElementById('profile');
  }

  showProfile(user) {
    this.profileContainer.innerHTML = `
        <article class="profile">
          <img src="${user.avatar_url}" alt="Profile Picture" style="width: 30%;">
          <section class="profile-info">
            <section class="stats">
              <span class="blue">Followers: ${user.followers}</span>
              <span class="white">Following: ${user.following}</span>
              <a href="${user.html_url}" target="_blank" class="blue" style="padding: 2px 8px; background-color: cornflowerblue; font-size: 14px; color: white; border: 1px solid cornflowerblue; border-radius: 20px; cursor: pointer">
                Go Profile
              </a>
            </section>
            <section class="additional-info">
              <table>
                <tbody>
                  <tr>
                    <td>Company</td>
                    <td>${user.company}</td>
                  </tr>
                  <tr>
                    <td>Website/Blog</td>
                    <td><a target="_blank">${user.blog}</a></td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>${user.location}</td>
                  </tr>
                  <tr>
                    <td>Member Since</td>
                    <td>${user.created_at}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </article>
    `;
  }

  clearProfile() {
    this.profileContainer.innerHTML = '';
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => this.clearAlert(), 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}

class App {
  constructor(github, ui) {
    this.github = github;
    this.ui = ui;
    this.init();
  }

  init() {
    document.getElementById('searchUser').addEventListener('keyup', (e) => {
      const userText = e.target.value;
      const profile = document.getElementById('profile');

      if (userText !== '') {
        profile.style.display = 'block';

        this.github.getUser(userText).then((data) => {
          console.log(data);
          if (data.profile.message === 'Not Found') {
            profile.style.display = 'none';
            this.ui.showAlert('User not found', 'alert alert-danger');
            this.ui.clearProfile();
          } else {
            this.ui.showProfile(data.profile);
          }
        });
      } else {
        this.ui.clearProfile();
        profile.style.display = 'none';
      }
    });
  }
}

const github = new GitHub();
const ui = new UI();

const app = new App(github, ui);

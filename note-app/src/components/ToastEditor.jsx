import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect } from 'react';

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const ToastEditor = ({ body, handleBody }) => {
  const editorRef = useRef();

  useEffect(() => {
    if (
      body &&
      editorRef.current &&
      editorRef.current.getInstance().getMarkdown() !== body
    ) {
      editorRef.current.getInstance().setMarkdown(body);
    }
  }, [body]);

  const onChangeGetMarkdown = debounce(() => {
    const currentMarkdown = editorRef.current.getInstance().getMarkdown();

    if (currentMarkdown !== body) {
      handleBody(currentMarkdown);
    }
  }, 300);

  return (
    <Editor
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
      height="500px"
      initialEditType="markdown"
      previewStyle="vertical"
      ref={editorRef}
      onChange={onChangeGetMarkdown}
      initialValue={body}
      hideModeSwitch="true"
      useCommandShortcut={false}
      usageStatistics={false}
    />
  );
};

export default ToastEditor;

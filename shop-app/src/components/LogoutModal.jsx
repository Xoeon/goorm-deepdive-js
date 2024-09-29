const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-60">
        <h2 className="text-center mb-4">로그아웃하시겠습니까?</h2>
        <div className="flex justify-center text-sm gap-2 mt-4">
          <button className="bg-black text-white px-4 py-1" onClick={onConfirm}>
            로그아웃
          </button>
          <button className="border border-black px-4 py-1" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

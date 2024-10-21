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
      editorRef.current.getInstance().getHTML() !== body
    ) {
      editorRef.current.getInstance().setHTML(body);
    }
  }, [body]);

  const onChangeGetHTML = debounce(() => {
    const data = editorRef.current.getInstance().getHTML();
    handleBody(data);
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
      onChange={onChangeGetHTML}
      initialValue={body}
      hideModeSwitch="true"
      useCommandShortcut={false}
      usageStatistics={false}
    />
  );
};

export default ToastEditor;

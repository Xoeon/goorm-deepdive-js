import React, { useRef } from 'react'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { useEffect } from 'react'

const ToastEditor = ({ body, handleBody }) => {
  const editorRef = useRef()

  useEffect(() => {
    if (body && editorRef.current) {
      editorRef.current.getInstance().setHTML(body) // body 값으로 에디터 초기화
    }
  }, [body])

  const onChangeGetHTML = () => {
    const data = editorRef.current.getInstance().getHTML()
    handleBody(data)
  }

  return (
    <Editor
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
      height='500px'
      initialEditType='markdown'
      previewStyle='vertical'
      ref={editorRef}
      onChange={onChangeGetHTML}
      initialValue={body}
      hideModeSwitch='true'
      useCommandShortcut={false}
      usageStatistics={false}></Editor>
  )
}

export default ToastEditor

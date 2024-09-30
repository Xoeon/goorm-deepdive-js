import React, { useRef } from 'react'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

const ToastEditor = ({ handleBody }) => {
  const editorRef = useRef()

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
      initialValue='Please enter text here!😜'
      hideModeSwitch='true'
      useCommandShortcut={false}
      usageStatistics={false}></Editor>
  )
}

export default ToastEditor

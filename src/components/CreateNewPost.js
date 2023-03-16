import { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  ForeColor,
  BackColor,
  CleanFormatting,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  NumberedList,
  BulletedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  InsertFile,
  SelectAll,
  Print,
  Pdf,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;

const tools = [
  [Bold, Italic, Underline, Strikethrough],
  [Subscript, Superscript],
  ForeColor,
  BackColor,
  [CleanFormatting],
  [AlignLeft, AlignCenter, AlignRight, AlignJustify],
  [Indent, Outdent],
  [OrderedList, UnorderedList],
  [NumberedList, BulletedList],
  FontSize,
  FontName,
  FormatBlock,
  [SelectAll],
  [Undo, Redo],
  [Link, Unlink, InsertImage, ViewHtml],
  [InsertTable, InsertFile],
  [Pdf, Print],
  [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
  [DeleteRow, DeleteColumn, DeleteTable],
  [MergeCells, SplitCell],
];

const initialRichText = `<h1>Hello world</h1>
  <p>How are you doing?</p>
`;

const RichTextEditor = props => {
  const [richText, setRichText] = useState(initialRichText);

  const onChangeText = e => {
    setRichText(e.html);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(richText);
  };

const CreateNewPost = (props) => {
  return (
    <>
      <form onSubmit={props.savePost}>
        <h2>Create New Post</h2>
        <label className="col-sm-12 col-form-label">
          <b>Title</b>
          <input
            className="form-control form-control-sm"
            autoFocus={true}
            type="text"
            placeholder="post title"
            onChange={props.savePostTitleToState}
            required
            ref={props.getTitle}
          />
        </label>
        <br />
        <label className="col-sm-12 col-form-label">
          <b>Content</b>
          <Editor
              defaultContent={richText}
              tools={tools}
              onChange={onChangeText}
              contentStyle={{ height: 200 }}
            />          
          <textarea
            className="form-control form-control-sm"
            placeholder="description"
            onChange={props.savePostContentToState}
            rows="18"
            cols="41"
            required
            ref={props.getContent}
          />
        </label>
        <br />
        <button title="save post" className="btn btn-success ml-3">
          Save
        </button>
      </form>
      <div className="k-flex-grow">
          <h2>Parsed Editor Text</h2>
          <div dangerouslySetInnerHTML={{ __html: richText }} />
        </div>
    </>
  );
 }
};

export default CreateNewPost;

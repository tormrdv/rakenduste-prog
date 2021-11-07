import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Table, Form, Input, Button} from 'antd';

function Posts() {
  const [title, setTitle] = useState("");
  const [textbody, setTextbody] = useState("");
  const [deletableID, setDeletableID] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'textbody',
      key: 'textbody',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja



  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(res => {
      return res.json();
    }).then(async (data) => {
      await dispatch(updatePosts(data))
    })
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleNewPostSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setTextbody("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };

  const handleDeletePostSubmit = (e) => {
    e.preventDefault();

    deletePost();

    if (inputRef.current) inputRef.current.focus();
  };

  const deletePost = () => {
    document.querySelectorAll("[data-row-key='']")

    fetch("http://localhost:8081/api/post/delete/" + deletableID, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
    }).catch((error) => {
      alert(error);
    });

    window.location.reload();

  }

  function PostDeleter() {
    return(
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 12 }}
        onSubmit={handleDeletePostSubmit}
      >
        <Form.Item
        label="Delete post with ID"
        name="deleterID"
        inputRef={inputRef}
        >
          <Input 
            onChange = {(e) => setDeletableID(e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="secondary" htmlType="submit">Delete post</Button>
        </Form.Item>

      </Form>
    )
  }

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title: title,
      textbody: textbody,
      createdAt: new Date().toLocaleString()

    };

    //Salvestame andmebaasi ja kui on edukas, 
    //siis teeme dispatchi ja uuendame state lokaalselt

    fetch("http://localhost:8081/api/post/create", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
    }).catch((error) => {
      alert(error);
    });

    window.location.reload();

  };

  return (
    <div>
      
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 18 }}
      layout="horizontal"
      onSubmit={handleNewPostSubmit}
    >
      <div style = {{ textAlign: "center" }}></div>
      
      <Form.Item
      label="Post Title"
      name="postTitle"
      >
        <Input onChange = {(e) => setTitle(e.target.value)}/>
      </Form.Item>

      <Form.Item
      label="Body"
      name="postBody"
      >
        <Input.TextArea onChange = {(e) => setTitle(e.target.value)}/>
      </Form.Item> 
      
      <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Post
        </Button>
      </Form.Item>
    </Form>
    
    <PostDeleter/>

    <Table columns={columns} dataSource={state.posts.data} rowKey='_id' />
    </div>
  )
}

export default Posts;
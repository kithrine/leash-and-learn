import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
  loading: false,
  success: false,
  blog: {
    title: "",
    authorFullName: "",
    authorTitle: "",
    avatar: "",
    category: "",
    subCategory: "",
    readTime: "",
    body: "",
    coverPhoto: "",
    date: "",
    comments: [{
      firstName: "",
      lastName: "",
      username: "",
      comment: "",
      timestamp: ""
    }]
  },
  blogs: [
    {
      title: "",
      authorFullName: "",
      authorTitle: "",
      avatar: "",
      category: "",
      subCategory: "",
      readTime: "",
      body: "",
      coverPhoto: "",
      date: "",
      comments: [{
        firstName: "",
        lastName: "",
        username: "",
        comment: "",
        timestamp: ""
      }]
    },
  ],
};

export const addBlog = createAsyncThunk("blog/add", async (data) => {
  const { title, authorFullName, authorTitle, avatar, category, subCategory, readTime, body,  coverPhoto, comments } = data;
  const response = await blogService.addBlog(title, authorFullName, authorTitle, avatar, category, subCategory, readTime, body, coverPhoto, comments);
  return response.data;
});

export const blogGetAll = createAsyncThunk("blog/list", async () => {
  console.log("redux blogGetAll");
  const response = await blogService.blogGetAll();
  console.log("redux blogGetAll response", response);
  return response.data;
});

export const blogGetOne = createAsyncThunk("blog/blogGetOne", async (id) => {
  // console.log("testing freaking id", id)
  const response = await blogService.blogGetOne(id);
  return response.data;
});

export const updateBlog = createAsyncThunk("blog/update", async ({id, blogEditForm}) => {
  const response = await blogService.updateBlog(id, blogEditForm);
  return response.data;
});

export const deleteBlog = createAsyncThunk("blog/delete", async (id) => {
    const response = await blogService.deleteBlog(id);
    return response.data;
  });

export const addBlogComment = createAsyncThunk("blog/commentCreate", async ({id, addComment}) => {
  const response = await blogService.addBlogComment(id, addComment);
  return response.data;
})

export const updateBlogComment = createAsyncThunk("blog/commentUpdate", async (commentInfo) => {
  const { blogId, commentId, commentEditForm } = commentInfo;
  const response = await blogService.updateBlogComment(blogId, commentId, commentEditForm)
  return response.data
})

export const deleteBlogComment = createAsyncThunk(
  "blog/commentDelete",
  async (commentInfo) => {
    // console.log("redux deleteBlogComment blog comment", commentInfo);
    const { blogId, commentId } = commentInfo;
    // console.log("deleteBlogComment commentId, comment", blogId, commentId);
    const response = await blogService.deleteBlogComment(
      blogId,
      commentId
    );
    // console.log(
    //   "redux deleteBlogComment blog response",
    //   response
    // );
    return response.data;
  }
);


export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    blogSearched(state, action) {
        console.log("blogSearched searchText", action.payload)
        state.searchText = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // Blog List
      .addCase(blogGetAll.pending, (state, action) => {
        // console.log("blogSlice blogGetAll.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(blogGetAll.fulfilled, (state, action) => {
        // console.log("blogSlice blogGetAll.fulfilled", action.payload);
        // console.log(action.payload.blogs);
        state.loading = false;
        state.blogs = action.payload.blogs;
        state.success = true;
      })
      .addCase(blogGetAll.rejected, (state, action) => {
        // console.log("blogSlice blogGetAll.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Add Blog
      .addCase(addBlog.pending, (state, action) => {
        // console.log("blogSlice addBlog.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        // console.log("blogSlice addBlog.fulfilled", action.payload);
        // console.log(action.payload.blog);
        state.loading = false;
        state.success = true;
      })
      .addCase(addBlog.rejected, (state, action) => {
        // console.log("blogSlice addBlog.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Get One Blog
      .addCase(blogGetOne.pending, (state, action) => {
        // console.log("blogSlice blogGetOne.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(blogGetOne.fulfilled, (state, action) => {
        // console.log("blogSlice blogGetOne.fulfilled", action.payload);
        // console.log(action.payload);
        state.loading = false;
        state.blog = action.payload;
        state.success = true;
      })
      .addCase(blogGetOne.rejected, (state, action) => {
        // console.log("blogSlice blogGetOne.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Update One Blog
      .addCase(updateBlog.pending, (state, action) => {
        // console.log("blogSlice updateBlog.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        // console.log("blogSlice updateBlog.fulfilled", action.payload);
        // console.log(action.payload);
        state.loading = false;
        state.blog = action.payload.blog;
        state.success = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        // console.log("blogSlice updateBlog.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Delete Blog
      .addCase(deleteBlog.pending, (state, action) => {
        // console.log("blogSlice deleteBlog.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        // console.log("blogSlice deleteBlog.fulfilled", action.payload);
        // console.log(action.payload);
        state.loading = false;
        state.blog = action.payload;
        state.success = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        // console.log("blogSlice deleteBlog.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Add a comment on a blog post
      .addCase(addBlogComment.pending, (state, action) => {
        // console.log(
        //   "blogSlice addBlogComment.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(addBlogComment.fulfilled, (state, action) => {
        // console.log(
        //   "blogSlice addBlogComment.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.blog = action.payload.blog;
        state.success = true;
      })
      .addCase(addBlogComment.rejected, (state, action) => {
        // console.log(
        //   "blogSlice addBlogComment.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Update a blog comment
      .addCase(updateBlogComment.pending, (state, action) => {
        // console.log(
        //   "blogSlice updateBlogComment.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(updateBlogComment.fulfilled, (state, action) => {
        console.log(
          "blogSlice updateBlogComment.fulfilled",
          action.payload
        );
        state.loading = false;
        state.blog = action.payload.blog;
      })
      .addCase(updateBlogComment.rejected, (state, action) => {
        // console.log(
        //   "blogSlice updateBlogComment.rejected",
        //   action.payload
        // );
        state.loading = false;
      })

      // Delete One blog comment
      .addCase(deleteBlogComment.pending, (state, action) => {
        // console.log(
        //   "blogSlice deleteBlogComment.pending",
        //   action.payload
        // );
        state.loading = true;
      })
      .addCase(deleteBlogComment.fulfilled, (state, action) => {
        // console.log(
        //   "blogSlice deleteBlogComment.fulfilled",
        //   action.payload
        // );
        state.loading = false;
        state.blog = action.payload.blog;
        state.success = true;
      })
      .addCase(deleteBlogComment.rejected, (state, action) => {
        // console.log(
        //   "blogSlice deleteBlogComment.rejected",
        //   action.payload
        // );
        state.loading = false;
      });
      
  },
});

export const { blogSearched } = blogSlice.actions;

export default blogSlice.reducer;


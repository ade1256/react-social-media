export const getTotalCommentByPost = (comments, postId) => {
  const total = comments.filter((comment) => comment.postId === postId).length;
  return total;
};

export const getUsernameById = (users, userId) => {
  const user = users.find((user) => user.id === userId);
  return user?.username || "";
};

export const getNamebyId = (users, userId) => {
  const user = users.find((user) => user.id === userId);
  return user?.name || "";
};

export const getCompanyNameById = (users, userId) => {
  const user = users.find((user) => user.id === userId);
  return user?.company?.name || "";
}

export const delay = (ms) => {
  return new Promise( (resolve) => {setTimeout(resolve, ms)});
}
function status(request, response) {
  response.status(200).json({"test":"hello world"});
}

export default status;
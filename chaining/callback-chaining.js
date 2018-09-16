const userGet = `https://api.github.com/search/users?page=1&q=daspinola&type=Users`;
request(userGet, function handleUsersList(error, users) {
  if (error) throw error;
  const list = JSON.parse(users).items;
  list.forEach(function(user) {
    request(user.repos_url, function handleReposList(err, repos) {
      if (err) throw err;
      // Handle the repositories list here
      // handle data received from api call 
      request(user.repos_url, function handleReposList(err, repos) {
        if (err) throw err;
        // Handle the repositories list here
        // handle data received from api call 
      });
    });
  });
});

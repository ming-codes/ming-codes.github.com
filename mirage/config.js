export default function() {
  this.get('https://api.github.com/repos/ming-codes/ming-codes.github.com/issues', function({ db }) {
    return db.posts;
  });
}

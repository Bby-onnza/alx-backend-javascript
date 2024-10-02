/**
 * Contains the miscellaneous route handlers.
 * @author Panda Onele <https://github.com/Bby-onnza>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

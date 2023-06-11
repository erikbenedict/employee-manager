# Employee Manager

## Description

Organization and planning are essential when it comes to running a business. This Employee Manager CLI application is a simple, and easy to use application that helps manage a company's employee database. A business owner will be able to view and manage the departments, roles, and employees in their company.

## Built With

- Node.js
- Inquirer
- Console.table
- Figlet
- MySQL

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

- Clone the repo
  ```sh
  git clone git@github.com:erikbenedict/employee-manager.git
  ```
- Install NPM packages
  ```sh
  npm i
  ```
- Create database in MySQL
  ```sh
  mysql -r root -p
  ```
  ```sh
  source ./db/schema.sql
  ```
- (OPTIONAL) Add seed data to the database
  ```sh
  source ./db/seeds.sql
  ```
- (!IMPORTANT!) Make sure to change `user:` and `password:` in the `connection.js` file to your personal local MySQL information to create the connection

## Usage

Below is a demo of how this Employee Manager application works. It's a simple process that will keep your business organized and efficient!

https://github.com/erikbenedict/employee-manager/assets/89614823/2015506d-c2ee-49a8-b631-112e346d7933

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [MIT](https://choosealicense.com/licenses/mit/) for more information.

## Contact

If you have any questions please reach out via email!

- Email: erik.r.benedict@gmail.com
- Twitter: [@\_Erik_Benedict](https://twitter.com/_Erik_Benedict)
- Project Link: [https://github.com/erikbenedict/employee-manager](https://github.com/erikbenedict/employee-manager)

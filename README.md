# Images Proxy

A simple Express service that uses Sharp and Zod to validate and transform images from a URL.

## Description

Images Proxy is a lightweight and easy-to-use service that allows you to convert and resize images on the fly. The service is built using Express and Sharp, and uses Zod for input validation. With Images Proxy, you can easily transform images from a remote URL and resize them, change their format, or adjust the quality.

## Installation

To use Images Proxy, you need to have Node.js and npm installed. Once you have these installed, you can clone the repository and install the dependencies by running the following commands:

```bash
git clone https://github.com/Vitu2002/images-proxy.git
cd images-proxy
npm install
```

## Configuration

After installing the dependencies, you need to create a `.env` file based on the `.env.example` file and modify the values according to your needs.
To configure the service, you can modify the values in the `.env` file. Here is a list of the available configuration options:

- `PORT`: The port on which the service will listen.
- `MIN_SIZE`: The minimum size (in pixels) of the transformed image.
- `MAX_SIZE`: The maximum size (in pixels) of the transformed image.
- `MIN_QUALITY`: The minimum quality (in percentage) of the transformed image.
- `MAX_QUALITY`: The maximum quality (in percentage) of the transformed image.
- `DEFAULT_QUALITY`: The default quality (in percentage) of the transformed image if not specified.
- `ALLOW_HOSTS`: A comma-separated list of hosts that are allowed to make requests to the service.
- `ALLOW_FORMATS`: A comma-separated list of allowed image formats.


## Usage

To start the service, run the following command:

```
npm start
```

The service will start listening on port 3000 by default. You can then access the service by visiting `http://localhost:3000`.

To transform an image, you need to send a GET request to the service with the following parameters:

- `url`: The URL of the image you want to transform.
- `w`: (Optional) The width of the transformed image. Must be a number between `MIN_SIZE` and `MAX_SIZE`.
- `h`: (Optional) The height of the transformed image. Must be a number between `MIN_SIZE` and `MAX_SIZE`.
- `q`: (Optional) The quality of the transformed image. Must be a number between `MIN_QUALITY` and `MAX_QUALITY`, or the `DEFAULT_QUALITY` if not specified.
- `format`: (Optional) The format of the transformed image. Must be one of the allowed formats specified in the `ALLOW_FORMATS` environment variable.

Here is an example of a request:

```
http://localhost:3000/?url=https://example.com/image.png&w=200&h=200&q=80&format=jpg
```

In this example, the service will transform the image located at `https://example.com/image.png` to a JPG image with a width of 200 pixels, a height of 200 pixels, and a quality of 80.

## Contributing

This project is still under development, and contributions are welcome. To contribute, please make a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

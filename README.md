# Compressor
### Compressor is tool for compressing images

## Install
```
  git clone https://github.com/saroamirkhanyan/compressor.git
  npm i -g
```

## Usage 

### Compressing all images in directory
```
  npx compressor --directory ./ --quality 60
```


### Configuration Commands

| Command                             | Description                         |
|-------------------------------------|-------------------------------------|
| --quality (number)                  | Percantage of compression           |
| --prefix (text)                     | Prefix before compressed image name |
| --save-in (directory)               | Where to save                       |
| --directory (directory)             | Where is located images             |
| --images (image1 image2 image3 ...) | Images to compress                  |
| --allowed (png jpg jpeg)            | Which formats compress              |

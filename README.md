# Compress images tool
### compress-images-tool is tool for compressing images

## Usage 

### Compressing all images in directory
```
  npx compress-images-tool --directory ./ --quality 50
```
### Compressing specific images
```
  npx compress-images-tool --directory ./ --quality 50  --images test-image.png test-image2.jpg
```


### Configuration Commands

| Command                             | Description                            |
|-------------------------------------|--------------------------------------- |
| --quality (number)                  | Percantage of compression default is 70|
| --prefix (text)                     | Prefix before compressed image name    |
| --save-in (directory)               | Where to save                          |
| --directory (directory)             | Where is located images                |
| --images (image1 image2 image3 ...) | Images to compress                     |
| --allowed (png jpg jpeg)            | Which formats compress                 |

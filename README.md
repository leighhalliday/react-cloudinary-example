# Image Uploads in React with Cloudinary

## React Dropzone

https://react-dropzone.js.org/

```js
const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
  accept: "image/*",
  multiple: false,
});
```

## Unsigned Uploads

```js
const formData = new FormData();
formData.append("file", file);
// formData.append(
//   "upload_preset",
//   process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
// );
formData.append("signature", signature);
formData.append("timestamp", timestamp);
formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_KEY);
```

https://cloudinary.com/documentation/upload_images#unsigned_upload

## Displaying Images

https://github.com/cloudinary/cloudinary-react

## Signed Uploads

https://cloudinary.com/documentation/upload_images#uploading_assets_to_the_cloud

### Create Signature

https://cloudinary.com/documentation/upload_images#signed_upload_video_tutorial

### Upload Image With Signature

https://cloudinary.com/documentation/upload_images#verifying_signatures_in_the_json_response

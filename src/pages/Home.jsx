// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Home = () => {
  const handleInit = () => {
    console.log("ok shod!");
  };
  return (
    <div>
      <FilePond
        oninit={() => handleInit()}
        allowReorder={false}
        allowMultiple={false}
        maxFiles={3}
        chunkUploads={false}
        name="video"
        chunkRetryDelays={[500, 1000, 3000]}
        
        server={{
          url: "http://192.168.88.253:8003/",
          timeout: 7000000,
          process: {
            url: "api/tests",
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: false,
            onload: (response) => response.key,
            onerror: (response) => response.data,
            // ondata: (formData) => {
            //   formData.append("Hello", "World");
            //   return formData;
            // },
          },
          revert: "./revert",
          restore: "./restore/",
          load: "./load/",
          fetch: "./fetch/",
        }}
      />
    </div>
  );
};

export default Home;

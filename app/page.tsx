// imports
import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Unlimited, Data-Saving File Converter
        </h1>
        <p className="text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Convert files effortlessly with FileFlipper using client-side FFmpeg.
          Enjoy unlimited transformations while prioritizing data savings.
          Elevate your content securely and efficiently. Start converting now!
        </p>
      </div>

      {/* Upload Box or Dropzone */}
      <Dropzone />
    </div>
  );
}

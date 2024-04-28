import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react';

import placeholder from "./assets/placeholder.svg"
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState<string>("")

  const [image, setImage] = useState<string>("")

  const [loading, setLoading] = useState<boolean>(false)

  const [imageNoBg, setImageNoBg] = useState<string>('')

  function search() {
    setLoading(true)
    fetch(`${url}/?image_url=${image}`)
      // get the attachment
      .then(response => response.blob())
      .then(data => {
        const imageUrl = URL.createObjectURL(data);
        setImageNoBg(imageUrl)
      }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>

      <div className="max-w-4xl mx-auto p-4 md:p-8 !pb-0 gap-4 flex flex-col">
        <h1 className="text-4xl font-bold text-center">RemoveBG</h1>
        <Input placeholder={'http://ngrok.com/abc'} onChange={(e) => {
          setUrl(e.target.value)
        }}/>
      </div>
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <img
            alt="Original Image"
            className="w-full h-full object-cover"
            height="400"
            src={image}
            onError={() => {
              setImage(placeholder)
            }}
            style={{
              aspectRatio: '600/400',
              objectFit: 'cover',
            }}
            width="600"
          />
        </div>
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <img
            alt="Original Image"
            className="w-full h-full object-cover"
            height="400"
            src={imageNoBg}
            onError={() => {
              setImageNoBg(placeholder)
            }}
            style={{
              aspectRatio: '600/400',
              objectFit: 'cover',
            }}
            width="600"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <form className="flex items-center gap-2" onSubmit={(e) => {
          e.preventDefault()
          search()
        }}>
          <Input className="flex-1" placeholder="URL de la imagen" type="url" onChange={
            (event) => {
              setImage(event.target.value)
            }
          }/>
          <Button type="submit">
            {loading ? <Loader2 className="h-6 w-6 animate-spin"/> : "Eliminar Fondo"}
          </Button>
        </form>
      </div>
    </>
  )
}

export default App

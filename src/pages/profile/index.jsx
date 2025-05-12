
import { useState, useRef } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Pencil } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TextField } from "@/components/forms"
import { Button } from "@/components/ui/button"

// Define validation schema with Yup
const AvatarSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .test("fileSize", "File is too large", (value) => {
      if (!value) return true
      return value.size <= 1024 * 1024 * 2 // 2MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      if (!value) return true
      return ["image/jpeg", "image/png", "image/gif"].includes(value.type)
    }),
})

export function profilePage() {

  const [previewUrl, setPreviewUrl] = useState(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-04-23_20-52-30.jpg-DlrGlW9SeFsnePw0J827xQFi6GMSKp.jpeg",
  )
  const [initials, setInitials] = useState("JD")
  const fileInputRef = useRef(null)

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  return (
    
    <div className="bg-white shadow p-6">
        <div className="p-4 flex"><p className="flex text-2xl font-semibold text-gray-500  ">تفاصيل الحساب</p>
       </div> <hr></hr>
    <div className="grid grid-cols-2 gap-4 ">
    <div className="flex justify-center items-center min-h-[300px]">
      <Formik
        initialValues={{ avatar: null }}
        validationSchema={AvatarSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission - in a real app, you would upload the file to your server
          console.log("Form submitted with values:", values)
          setSubmitting(false)
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div className="relative">
              {/* Purple background circle */}
              <div className="absolute inset-0 rounded-full bg-purple-500"></div>

              {/* Avatar with image */}
              <Avatar className="h-32 w-32 border-4 border-purple-500 relative z-10">
                <AvatarImage src={previewUrl || "/placeholder.svg"} alt="User avatar" className="object-cover" />
                <AvatarFallback className="text-lg bg-purple-500 text-white">{initials}</AvatarFallback>
              </Avatar>

              {/* Edit button with pencil icon */}
              <div
                className="absolute bottom-0 right-0 bg-gray-200 text-gray-700 rounded-full p-2 cursor-pointer shadow-md z-20"
                onClick={handleAvatarClick}
              >
                <Pencil className="h-4 w-4" />
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                id="avatar"
                name="avatar"
                className="hidden"
                accept="image/png, image/jpeg, image/gif"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0]
                  if (file) {
                    setFieldValue("avatar", file)

                    // Create a preview URL
                    const reader = new FileReader()
                    reader.onloadend = () => {
                      setPreviewUrl(reader.result)
                    }
                    reader.readAsDataURL(file)
                  }
                }}
              />

              {/* Error message */}
              {errors.avatar && touched.avatar ? (
                <div className="mt-2 text-sm text-red-500 text-center">{errors.avatar}</div>
              ) : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
    <div className="flex flex-col gap-5 justify-center px-2 py-6">
      <TextField
      name={"user Name"}
      label="معرف المستخدم"
      placeholder="099999999"
      ></TextField>
      <TextField
      name={"user Name"}
      label=" كلمة السر الجديدة" 
      placeholder="099999999"
      ></TextField>
      <TextField
      name={"user Name"}
      label="تأكيد كلمة السر الجديدة"
      placeholder="099999999"
      ></TextField>
      <Button className={"bg-primary w-32 text-white  relative right-63 my-5 "} > حفظ التغييرات</Button>
    </div>
    </div>
    </div>
  )
}

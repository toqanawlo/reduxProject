import { TextField } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { Field, Form, Formik } from "formik";
import img1 from '../../assets/vuexy-logo.svg';
import img2 from '../../assets/top-shape (1).svg';
import img3 from '../../assets/bottom-shape.svg';
import * as Yup from "yup";
import React from "react";
import { useLoginMutation } from "@/services/authApi";

function LoginPage() {
  const [login,{isLoading}]=useLoginMutation()
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={() => {
        return Yup.object({
          email: Yup.string().email().required("الرجاء إدخال معرف السمتخدم"),
          password: Yup.string().min(5, "short").required("الرجاء إدخال كلمة المرور "),
        });
      }}
      onSubmit={(values) => {
        const response=login({...values})
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="bg-gray-200 flex justify-center relative items-center h-dvh">
            <img src={img2} className="absolute top-4 left-96"></img>
            <div className=" flex shadow flex-col z-50 gap-6 py-8 p-5 bg-white max-w-9/12 w-full lg:max-w-4/12  items-center">
            <img src={img1} className="mb-0 bg-cover"></img>
            <h1 className=" font-semibold text-3xl text-gray-700 ">نظام إدارة  مطاعم</h1>
              <Field
                name="email"
                component={TextField} 
                className="text-3xl text-gray-700"
                label="معرف المستخدم *"
                placeholder="ahmad-alahmad"
                error={
                  errors.email && touched.email
                    ? errors.email
                    : undefined
                }
              />
              <Field
                name="password"
                component={TextField}
                label="كلمة السر *"
                type="password"
                placeholder=".............."
                error={
                  errors.password && touched.password
                    ? errors.password
                    : undefined
                }
              />
              <Button className="w-80 p-6 cursor-pointer text-white bg-primary" type="submit">
                تسجيل الدخول
              </Button>
            </div>
            <img src={img3} className="absolute  bottom-7 right-96"></img>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginPage;

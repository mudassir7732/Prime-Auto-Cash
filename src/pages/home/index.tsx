import { FC } from "react";
import styles from "./styles";
import { Form, Formik } from "formik";
import * as yup from 'yup';
import { FORM_VALUES } from "../../constants/form-values";
import { FormProps } from "../../types/form-props";

const VALIDATION_SCHEMA = yup.object().shape({
    VIN: yup.number().typeError('Digits only').required('VIN number required'),
    mileage: yup.number().typeError('Digits only').required('Mileage required'),
    zip_code: yup.number().typeError('Digits only').required('Zip code required')
})

const Home: FC = () => {
    const handleSubmit = (values: FormProps) => {
        console.log(values, ' = Values');
    }

    return (
        <div className={styles.container}
            style={{ backgroundImage: 'url(/assets/images/Rectangle130.png)', backgroundSize: '100% 80%', }}
        >
            <div className={styles.title_wrapper}>
                <p className={styles.title}>
                    FAST, FAIR CAR OFFERS
                </p>
                <p className={styles.sub_title}>
                    QUICK CASHOFF IN CONFIDENCE
                </p>
            </div>
            <Formik initialValues={FORM_VALUES} validationSchema={VALIDATION_SCHEMA} onSubmit={handleSubmit}>
                {({ handleChange, values, touched, errors }) => (
                    <Form className={styles.card}>
                        <p className={styles.card_title}>
                            Get an offer by just adding
                            <div className={styles.card_title1}>
                                the
                                <p className={styles.card_title2}>
                                    VIN and Mileage
                                </p>
                            </div>
                        </p>
                        <p className={`${styles.input_label} xl:mt-[36px] 2xl:mt-[50px]`}>
                            VIN Number
                        </p>
                        <div className={styles.input_wrapper} >
                            <input name="VIN" value={values.VIN} onChange={handleChange} placeholder="Enter the VIN Number Here" className={styles.wrapped_input} />
                            <p className={styles.placeholder}>
                                17 DIGIT VIN
                            </p>
                        </div>
                        {errors.VIN && touched.VIN && (
                            <p className={styles.error}>
                                {errors.VIN?.toString()}
                            </p>
                        )}
                        <p className={styles.helper_text}>
                            The VIN Number will help us identify the car details.
                        </p>
                        <div className={styles.inputs_container}>
                            <div className="w-full">
                                <p className={`${styles.input_label} xl:mt-[15px] 2xl:mt-[21px]`}>
                                    Mileage
                                </p>
                                <input placeholder="Enter Mileage" name="mileage" value={values.mileage} onChange={handleChange} className={styles.simple_input} />
                                {errors.mileage && touched.mileage && (
                                    <p className={styles.error}>
                                        {errors.mileage?.toString()}
                                    </p>
                                )}
                                <p className={styles.helper_text}>
                                    Will help us understand car travelled by far.
                                </p>
                            </div>
                            <div className="w-full">
                                <p className={`${styles.input_label} xl:mt-[15px] 2xl:mt-[21px]`}>
                                    ZIP Code
                                </p>
                                <input placeholder="Enter Area ZIP Code" name="zip_code" value={values.zip_code} onChange={handleChange} className={styles.simple_input} />
                                {errors.zip_code && touched.zip_code && (
                                    <p className={styles.error}>
                                        {errors.zip_code?.toString()}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={styles.button_wrapper}>
                            <button className={styles.button}>
                                Continue
                            </button>
                        </div>
                        <p className={styles.button_helper_text}>
                            The VIN Number will help us identify the car details.
                        </p>
                    </Form>
                )}
            </Formik>
        </div >
    )
}
export default Home;
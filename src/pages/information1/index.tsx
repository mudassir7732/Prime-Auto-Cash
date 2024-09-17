import { Form, Formik } from "formik";
import styles from "./styles";
import * as yup from 'yup';
import { VehicleProps } from "../../types/vehicle-props";
import { UserProps } from "../../types/user-props";
import { VEHICLE_VALUES } from "../../constants/vehicle-values";
import { USER_VALUES } from "../../constants/user-values";

const VEHICLE_SCHEMA = yup.object().shape({
    year: yup.string().required('Year required'),
    transmission: yup.string().required('Transmission required'),
    VIN: yup.string().required('VIN required'),
    mileage: yup.number().typeError('Numbers only').required('Mileage required'),
})

const USER_SCHEMA = yup.object().shape({
    full_name: yup.string().required('Full name required'),
    email: yup.string().required('Email required'),
    mobile_no: yup.number().typeError('Numbers only').required('Mobile no. required'),
})

const Information1 = () => {

    const handleVehicleInfo = (values: VehicleProps) => {
        console.log(values, ' = Values');
    }

    const handleUserInfo = (values: UserProps) => {
        console.log(values, ' = Values');
    }

    return (
        <div className={styles.container}>
            <div className={styles.stepper}>
                <div className={styles.step}>
                    <div className={`${styles.step_no} text-[#b8b6b6] bg-[#6c757d] bg-opacity-10`}>
                        1
                    </div>
                    <p className={`${styles.step_text} text-[#bcbcbc]`}>
                        Vehicle
                    </p>
                </div>
                <div className={styles.divider} />
                <div className={styles.step}>
                    <div className={`${styles.step_no} text-white bg-[#3155ff]`}>
                        2
                    </div>
                    <p className={`${styles.step_text} text-[#7b7b7b]`}>
                        Information
                    </p>
                </div>
                <div className={styles.divider} />
                <div className={styles.step}>
                    <div className={`${styles.step_no} text-[#b8b6b6] bg-[#6c757d] bg-opacity-10`}>
                        3
                    </div>
                    <p className={`${styles.step_text} text-[#bcbcbc]`}>
                        Offer
                    </p>
                </div>
            </div>

            <div className={styles.cards_wrapper}>
                <Formik initialValues={VEHICLE_VALUES} validationSchema={VEHICLE_SCHEMA} onSubmit={handleVehicleInfo}>
                    {({ handleChange, values, touched, errors }) => (
                        <Form className={styles.card}>
                            <p className={styles.card_title}>
                                Vehicle Information
                            </p>
                            <div className={`${styles.inputs_wrapper} xl:mt-[55px] 2xl:mt-[78px]`}>
                                <div className="w-[59%]">
                                    <p className={styles.input_label}>
                                        Year, Maker and Model
                                    </p>
                                    <input name="year" value={values.year} onChange={handleChange} placeholder="2018 BMW Series 580i" className={`${styles.input_wrapper} ${styles.wrapped_input}`} />
                                    {errors.year && touched.year && (
                                        <p className={styles.error}>
                                            {errors.year?.toString()}
                                        </p>
                                    )}
                                </div>
                                <div className="w-[35%]">
                                    <p className={styles.input_label}>
                                        Transmission
                                    </p>
                                    <div className={`flex flex-row items-center justify-between ${styles.input_wrapper}`}>
                                        <input name="transmission" value={values.transmission} onChange={handleChange} placeholder="Automatic" className={`${styles.wrapped_input} w-full`} />
                                        <p className={styles.placeholder}>
                                            Type
                                        </p>
                                    </div>
                                    {errors.transmission && touched.transmission && (
                                        <p className={styles.error}>
                                            {errors.transmission?.toString()}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="xl:mt-[14px] 2xl:mt-[20px] flex flex-row items-start justify-between">
                                <div className="w-[55%]">
                                    <p className={styles.input_label}>
                                        VIN Number
                                    </p>
                                    <div className={`flex flex-row items-center justify-between ${styles.input_wrapper}`}>
                                        <input name="VIN" value={values.VIN} onChange={handleChange} placeholder="2GNALCELK6H1588338" className={`${styles.wrapped_input} h-full`} />
                                        <p className={styles.placeholder}>
                                            17 DIGIT VIN
                                        </p>
                                    </div>
                                    {errors.VIN && touched.VIN && (
                                        <p className={styles.error}>
                                            {errors.VIN?.toString()}
                                        </p>
                                    )}
                                </div>
                                <div className="w-[39%]">
                                    <p className={styles.input_label}>
                                        Mileage
                                    </p>
                                    <div className={`flex flex-row items-center justify-between ${styles.input_wrapper}`}>
                                        <input name="mileage" value={values.mileage} onChange={handleChange} placeholder="98,565" className={`${styles.wrapped_input} w-[120px]`} />
                                        <p className={styles.placeholder}>
                                            miles
                                        </p>
                                    </div>
                                    {errors.mileage && touched.mileage && (
                                        <p className={styles.error}>
                                            {errors.mileage?.toString()}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <button type='submit' className={styles.button}>
                                    Start With Another Car
                                </button>
                                <p className={styles.bottom_text}>
                                    The VIN Number will help us identify the car details.
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>

                <Formik initialValues={USER_VALUES} validationSchema={USER_SCHEMA} onSubmit={handleUserInfo}>
                    {({ handleChange, values, touched, errors }) => (
                        <Form className={styles.card}>
                            <p className={styles.card_title}>
                                Your Information
                            </p>
                            <div className="xl:mt-[55px] 2xl:mt-[78px]">
                                <p className={styles.input_label}>
                                    Full Name
                                </p>
                                <input name="full_name" value={values.full_name} onChange={handleChange} placeholder="Enter your full name" className={styles.simple_input} />
                                {errors.full_name && touched.full_name && (
                                    <p className={styles.error}>
                                        {errors.full_name?.toString()}
                                    </p>
                                )}
                            </div>
                            <div className={`${styles.inputs_wrapper} xl:mt-[14px] 2xl:mt-[20px]`}>
                                <div className="w-full">
                                    <p className={styles.input_label}>
                                        Email Address
                                    </p>
                                    <input name="email" value={values.email} onChange={handleChange} placeholder="Enter your E-mail" className={styles.simple_input} />
                                    {errors.email && touched.email && (
                                        <p className={styles.error}>
                                            {errors.email?.toString()}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full">
                                    <p className={styles.input_label}>
                                        Mobile Number
                                    </p>
                                    <input name="mobile_no" value={values.mobile_no} onChange={handleChange} placeholder="Enter your Cell No." className={styles.simple_input} />
                                    {errors.mobile_no && touched.mobile_no && (
                                        <p className={styles.error}>
                                            {errors.mobile_no?.toString()}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <button type="submit" className={styles.button}>
                                    Continue
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default Information1;
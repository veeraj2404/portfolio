import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiPython } from 'react-icons/si' 
import { TbDatabase } from 'react-icons/tb'
import { motion } from "framer-motion";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdAccountTree } from 'react-icons/md' 

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-6">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    title='Power BI'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsFillBarChartFill className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    title='ETL Processing'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <MdAccountTree  className='text-7xl text-blue-700' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    title='Python'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython  className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    title='React'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    title='MongoDB'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    title='SQL'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbDatabase  className='text-7xl text-blue-700' />
                </motion.div>
            </motion.div>
        </div>
    )
}

import { motion } from "framer-motion";

const Floating = () => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <motion.div
        className="h-[300px] w-[300px] rounded-full bg-blue-100"
        animate={{ y: [0, -15, 0] }} 
        transition={{ 
          duration: 1.8,  
          ease: "easeInOut", 
          repeat: Infinity
        }}
      />
    </main>
  );
};

export default Floating;

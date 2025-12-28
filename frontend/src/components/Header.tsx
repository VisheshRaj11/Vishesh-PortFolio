import React, { useEffect, useState } from 'react'
import myImage from "../assets/myImage.jpg"
import { Blocks, Clock, Download, FolderGit2, Github, GitPullRequest, Home, icons, Linkedin, Smartphone } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import { Button } from './ui/button';


interface HeaderProps{
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header:React.FC<HeaderProps> = ({open, setOpen}) => {
  const navItems = [
    {name: "Home", icon: <Home/>, path:'/'},
    {name: "Skill Set", icon: <Blocks/>, path:'/skills'},
    {name: "Projects", icon: <FolderGit2/>, path:'/projects'},
    {name: "Contributions", icon: <GitPullRequest/>, path:'/contributions'},
    {name: "Contact", icon: <Smartphone/>, path:'/contact'},
  ]

   const socialProfiles = [{name:"Linkedin",icon: <Linkedin/>, url:"https://www.linkedin.com/in/vishesh-raj", hoverClass: "hover:text-blue-400 hover:border-blue-400"},
                          {name:"Github",icon: <Github/>, url:"https://www.github.com/VisheshRaj11", hoverClass: "hover:text-green-400 hover:border-green-400"},
                        ]

                        
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "/College_Gen_Resume.pdf";
        link.download = "Vishesh_Cv.pdf";
        link.click();
    }
    
    const handleTime = () => {
        return new Date().toLocaleTimeString();
    }

    const [time, setTime] = useState(handleTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(handleTime());
        },1000)

        return () => clearInterval(interval);
    },[]);

    
  return (
    <div className='h-full flex flex-col'>
        <div className='mt-2 px-5 py-5  flex gap-2 items-start shrink-0'>
            <img src={myImage} className='w-16 rounded-xl object-cover' alt="" />
            <div>
                <p className='font-semibold text-xl'>Vishesh Raj</p>
                <p className='text-gray-500 text-sm'>FullStack Developer</p>
            </div>
        </div>

        <nav className='flex-1 min-h-0 overflow-y-auto'>
        <ul className="flex flex-col gap-1 p-2">
            {navItems.map((item) => (
            <li key={item.path}>
                <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                    `flex items-center gap-3 mb-6 px-4 py-2 rounded-md transition-colors duration-200
                    ${
                    isActive
                        ? "bg-gray-500/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`
                }
                >
                <span className={`text-lg`}>{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
                </NavLink>
            </li>
            ))}
        </ul>
        </nav>

        <div className='shrink-0'>
            <p className='px-3 text-gray-400 font-semibold'>Social Profiles</p>
            <ul>
                {socialProfiles.map((profile) => (
                    <li className={`
                border border-gray-700 p-2 m-2 rounded-md
                transition-all duration-300
                hover:bg-white/5
                ${profile.hoverClass}
            `}>
                    <a 
                    className={`flex gap-2 `}
                    href={profile.url}>
                        <span>{profile.icon}</span>
                        <p>{profile.name}</p>
                    </a>
                    </li>
                ))}
            </ul>
        </div>

        <div className='p-2 shrink-0'>
            <Button 
            onClick={handleDownload}
            className='border border-gray-600 hover:bg-white/10 hover:shadow-sm hover:shadow-purple-300 transition duration-300 border-dashed w-full '>
                <span><Download/></span>
                <p>Download Cv</p>
            </Button>
        </div>

        <div className='px-2 border-t border-gray-700 bg-black/10 flex flex-col items-center shrink-0'>
            <p className='flex gap-2 items-center text-gray-400 font-semibold mb-1 mt-2'><Clock size={18}/>Good Time</p>
            <p className='text-xl text-center font-semibold mb-1'>{time}</p>
        </div>
    </div>
  )
}

export default Header
import { GrUserPolice } from 'react-icons/gr'
interface NavBarProps {
    scrollHeight: number
}

export const NavBar = ({ scrollHeight }: NavBarProps) => {
    let transparency = 1
    let fontSize = 20
    let blur = 0
    let textcolor = 255

    if (scrollHeight <= 150) {
        transparency -= (1 * scrollHeight) / 150
        fontSize += (4 * scrollHeight) / 150
        blur += (3.5 * scrollHeight) / 150
        textcolor -= (scrollHeight * 255) / 150
    } else if (scrollHeight >= 150) {
        transparency -= 1
        fontSize += 4
        blur += 3.5
        textcolor = 0
    }

    return (
        <>
            <div
                className="Navbar"
                style={{
                    backgroundColor: `rgb(26 44 67  /${transparency}`,
                    fontSize: `${fontSize}px`,
                    backdropFilter: `blur(${blur}px)`,
                    color: `rgb(${textcolor} ${textcolor} ${textcolor})`,
                    transition: 'ease-in-out'
                }}
            >
                <GrUserPolice
                    size={40}
                    style={{
                        filter: `invert(${(textcolor / 255) * 100}%)`,
                        alignSelf: 'center'
                    }}
                />
                <div className="navElement">
                    <p>Home</p>
                    <p>About</p>
                    <p>Crime Data</p>
                </div>
            </div>
        </>
    )
}

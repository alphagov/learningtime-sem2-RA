interface NavBarProps {
    scrollHeight: number
}

export const NavBar = ({ scrollHeight }: NavBarProps) => {
    let transparency = 1
    let fontSize = 16
    let blur = 0

    if (scrollHeight <= 150) {
        transparency -= (1 * scrollHeight) / 150
        fontSize += (4 * scrollHeight) / 150
        blur += (3.5 * scrollHeight) / 150
    } else if (scrollHeight >= 150) {
        transparency -= 1
        fontSize += 4
        blur += 3.5
    }

    return (
        <>
            <div
                className="Navbar"
                style={{
                    backgroundColor: `rgb(130 125 125 /${transparency})`,
                    fontSize: `${fontSize}px`,
                    backdropFilter: `blur(${blur}px)`
                }}
            >
                <img className="logo" src="logo.jpg" />
                <div className="navElement">
                    <p>Home</p>
                    <p>About</p>
                    <p>Crime Data</p>
                </div>
            </div>
        </>
    )
}

import { FooterContent, Navbar, PhotoGrid } from "../components"

export default function HomePage() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <PhotoGrid/>
            </main>
            <footer>
                <FooterContent/>
            </footer>
        </>
    );
}
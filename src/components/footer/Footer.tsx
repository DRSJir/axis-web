import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

export default function Footer() {
    return (
        <footer className="w-full bg-[#0f0f11] text-white min-[415px]:bg-white min-[415px]:text-black pt-[15vw] min-[415px]:pt-1 pb-[8vw] min-[415px]:pb-6 mt-[10vw] min-[415px]:mt-1">
            <div className="max-w-640 mx-auto px-[6vw]">
                <FooterMobile />
                <FooterDesktop />
            </div>
        </footer>
    );
}
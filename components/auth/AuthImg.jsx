import Image from "next/image";

export default function AuthImg() {
    return (
        <Image
            src="/images/auth_img.jpg"
            alt="auth_img"
            fill
            priority
            style={{ objectFit: "cover" }}
        />
    )
}
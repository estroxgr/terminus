import { CSSProperties } from "react";

interface TermProps {
    title: string;
    isMax: boolean;
    children: React.ReactNode;
    resize: VoidFunction;
}

function Terminal({ title, children, isMax, resize }: TermProps) {

    const size: CSSProperties = {
        maxWidth: '90dvw',
        width: isMax ? '90%' : 500,
        height: isMax ? '90%' : 400,

    }
    return (
        <div style={{ ...style, ...size }}>
            <div className="titlebar" onDoubleClick={resize}>
                {title}
            </div>

            {children}
        </div>
    )
}


const style: CSSProperties = {
    transform: 'translate(-50%,-50%)',
    background: "rgba( 0, 0, 0, 0.69 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.27 )",
    backdropFilter: "blur( 18px )",
    WebkitBackdropFilter: "blur( 18px )",
    borderRadius: 8,
    border: "5px solid rgba(255, 191, 0, 0.88)",
    position: 'absolute',
    backgroundColor: '#000',
    top: '50%',
    left: '50%',

}
export default Terminal;
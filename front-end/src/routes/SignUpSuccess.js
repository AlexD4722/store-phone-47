import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUpSuccess() {
    const navigate = useNavigate();
    const [timeleft, setTimeleft] = useState(10);

    useEffect(() => {
        let timer = setInterval(() => {
            setTimeleft((prev) => prev - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (timeleft === 0) {
            navigate("../../signin");
        }
    }, [timeleft]);
    
    return (
        <div className="text-center mt-5">
            <h1>Successfully! </h1>
            <div>
                Redirect to sign in page in {timeleft}...or you can click{" "}
                <Link to="../../signin" className="text-primary">
                    here
                </Link>
            </div>
        </div>
    );
}

export default SignUpSuccess;

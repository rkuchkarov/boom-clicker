import React from 'react';
import {BoomClickerServiceConsumer} from "../../boom-clicker-serivce-context";

const withBoomClickerSerivce = () => (Wrapped) => {
    return (props) => {
        return (
            <BoomClickerServiceConsumer>
                {
                    (boomClickerService) => {
                        return (<Wrapped { ...props}
                        boomClickerService={boomClickerService}/>);

                    }
                }
            </BoomClickerServiceConsumer>
        );
    }
};

export default withBoomClickerSerivce;
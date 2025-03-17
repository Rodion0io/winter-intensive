import "./profilePage.css"

import InputBlock from "../../../Components/inputBlock/InputBlock";

import { logout } from "../../../utils/logout";
import { updateProfile } from "../../../API/updateProfile";

import { useUserData } from "./hooks/useUserData";


const ProfilePage = () => {

    const token = localStorage.getItem('token');
    const {userDatas, handleChange} = useUserData();

    console.log(userDatas);

    
    return (
        <>
            <section className="profile-page">
                <div className="container">
                    <div className="profile-page_container">
                        <h1 className="section-title">Авторизация</h1>

                        <InputBlock
                            inputBlockClass="input-block"
                            forName="address"
                            labelValue="Фамилия*"
                            inputType="text"
                            placeholderValue="Фамилия"
                            inputId="AdresId"
                            isRequred={false}
                            inputClass="inputcl personalDataClass"
                            onInputChange={(value) => handleChange('lastname', value)}
                            maxLength={60}
                            value={userDatas.lastname}
                        />

                        <InputBlock
                            inputBlockClass="input-block"
                            forName="address"
                            labelValue="Имя*"
                            inputType="text"
                            placeholderValue="Имя"
                            inputId="AdresId"
                            isRequred={false}
                            inputClass="inputcl personalDataClass"
                            onInputChange={(value) => handleChange('firstname', value)}
                            maxLength={60}
                            value={userDatas.firstname}
                        />

                        <InputBlock
                            inputBlockClass="input-block"
                            forName="address"
                            labelValue="Отчество*"
                            inputType="text"
                            placeholderValue="Отчество"
                            inputId="AdresId"
                            isRequred={false}
                            inputClass="inputcl personalDataClass"
                            onInputChange={(value) => handleChange('middlename', value)}
                            maxLength={60}
                            value={userDatas.middlename}
                        />

                        <InputBlock
                            inputBlockClass="input-block"
                            forName="address"
                            labelValue="Телефон*"
                            inputType="text"
                            placeholderValue="Телефон"
                            inputId="AdresId"
                            isRequred={false}
                            inputClass="inputcl personalDataClass"
                            onInputChange={(value) => handleChange('phone', value)}
                            maxLength={60}
                            value={userDatas.phone}
                        />

                        <InputBlock
                            inputBlockClass="input-block"
                            forName="address"
                            labelValue="Email*"
                            inputType="text"
                            placeholderValue="Email"
                            inputId="AdresId"
                            isRequred={false}
                            inputClass="inputcl personalDataClass"
                            onInputChange={(value) => handleChange('email', value)}
                            maxLength={60}
                            value={userDatas.email}
                        />

                        <InputBlock
                            inputBlockClass="input-block"
                            forName="address"
                            labelValue="Адрес"
                            inputType="text"
                            placeholderValue="Адрес"
                            inputId="AdresId"
                            isRequred={false}
                            inputClass="inputcl personalDataClass"
                            onInputChange={(value) => handleChange('city', value)}
                            maxLength={60}
                            value={userDatas.city}
                        />
                        
                        <div className="actions-block">
                            <button onClick={() => logout()}>Выйти</button>
                            <button onClick={() => {updateProfile(userDatas, token), window.location.href = "/"}}>Обновить данные</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfilePage;
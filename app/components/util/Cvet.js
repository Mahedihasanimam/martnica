import React from 'react';

const Cvet = () => {
    return (
        <div>
            <div className="bg-[#F1F5F8] py-14 border">
          <div className="space-y-4 container mx-auto">
            <h3 className="text-[#1E2125] text-5xl">Cvetličarne</h3>
            <p className="text-[#414141] max-w-2xl text-xl 
            ">Pregled lokalnih cvetličarn. Lahko odprete njihovo stran in jih pokličete ali pa kliknete njihov produkt in jim pošljete sporočilo, morda naročilo in kontaktirali vas bodo nazaj. Možnost spletnega nakupa bomo dodali kmalu.</p>
            <button className="flex items-center   rounded-lg h-12 w-[125px] justify-center  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "#1E2125",
                  textAlign: "center",
                  fontVariationSettings: "'opsz' 16",
                }}>
                Open
              </div>
            </button>
          </div>
        </div>
        </div>
    );
};

export default Cvet;
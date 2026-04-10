import svgPaths from "./svg-dhkc52ma0t";
import imgContainer from "figma:asset/b91382fe13dbf095954045a9c275c5db00fbfe59.png";
import imgImageDeluxeSuite from "figma:asset/591209505734a57ba27c784ced6326157f467c1e.png";
import imgImagePresidentialSuite from "figma:asset/42baf34f839d73ac6606656168b9a7d838060afc.png";
import imgImagePoolsideVilla from "figma:asset/9acfd692a6d65d2c08cb1bd84e2350ba4eed6db1.png";
import imgContainer1 from "figma:asset/177261542e7704a8e33cfb373a41418f506c89b1.png";
import imgImageSpa from "figma:asset/8eb39c726a9464aeb229945cb4038ee247b6d7bf.png";

function Container1() {
  return (
    <div className="absolute h-[851.628px] left-0 top-0 w-[376.404px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] h-[851.628px] left-0 to-[rgba(0,0,0,0.8)] top-0 via-1/2 via-[rgba(0,0,0,0.4)] w-[376.404px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute h-[851.628px] left-0 top-0 w-[376.404px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[48.005px] left-[23.99px] top-0 w-[328.417px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[48px] left-[164.22px] not-italic text-[48px] text-center text-white top-[-3.88px] tracking-[2.4px] whitespace-nowrap">MAISON</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[56.003px] left-[23.99px] top-[72px] w-[328.417px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[28px] left-[164.5px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] text-center top-[-0.78px] tracking-[0.45px] w-[329px]">Where Elegance Meets Comfort in the Heart of the City</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[51.978px] left-[122.71px] top-[175.99px] w-[130.968px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[65.49px] not-italic text-[14px] text-black text-center top-[15px] tracking-[1.4px] whitespace-nowrap">EXPLORE</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[227.966px] left-0 top-[311.83px] w-[376.404px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Button />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[31.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6618 10.6639">
            <path d={svgPaths.p110c5480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2.66596" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[172.21px] pt-[0.236px] size-[31.992px] top-[787.65px]" data-name="Button">
      <Container4 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[851.628px] overflow-clip relative shrink-0 w-full" data-name="HeroSection">
      <Container />
      <Container3 />
      <Button1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[39.989px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-[164.81px] not-italic text-[36px] text-center text-white top-[-2.44px] tracking-[1.8px] whitespace-nowrap">Our Suites</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[56.003px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[164.5px] not-italic text-[18px] text-[rgba(255,255,255,0.6)] text-center top-[-0.78px] w-[329px]">Experience unparalleled comfort in meticulously designed spaces</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[111.988px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[31.992px] items-start left-0 top-[461.88px] w-[328.417px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white tracking-[0.6px]">Deluxe Suite</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[23.994px] items-start left-0 top-[501.87px] w-[328.417px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Spacious elegance with panoramic city views</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[19.986px] items-start left-0 top-[537.85px] w-[328.417px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.35px]">From $450/night</p>
    </div>
  );
}

function ImageDeluxeSuite() {
  return (
    <div className="absolute h-[437.889px] left-0 top-0 w-[328.417px]" data-name="Image (Deluxe Suite)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDeluxeSuite} />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[437.889px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[328.417px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute h-[437.889px] left-0 overflow-clip top-0 w-[328.417px]" data-name="Container">
      <ImageDeluxeSuite />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[557.84px] left-0 top-0 w-[328.417px]" data-name="Container">
      <Heading2 />
      <Paragraph2 />
      <Paragraph3 />
      <Container8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[31.992px] items-start left-0 top-[461.88px] w-[328.417px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white tracking-[0.6px]">Presidential Suite</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[23.994px] items-start left-0 top-[501.87px] w-[328.417px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.6)]">Ultimate luxury with private terrace</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[19.986px] items-start left-0 top-[537.85px] w-[328.417px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.35px]">From $850/night</p>
    </div>
  );
}

function ImagePresidentialSuite() {
  return (
    <div className="absolute h-[437.889px] left-0 top-0 w-[328.417px]" data-name="Image (Presidential Suite)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePresidentialSuite} />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[437.889px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[328.417px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="absolute h-[437.889px] left-0 overflow-clip top-0 w-[328.417px]" data-name="Container">
      <ImagePresidentialSuite />
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[557.84px] left-0 top-[589.83px] w-[328.417px]" data-name="Container">
      <Heading3 />
      <Paragraph4 />
      <Paragraph5 />
      <Container11 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[31.992px] items-start left-0 top-[461.88px] w-[328.417px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white tracking-[0.6px]">Poolside Villa</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[23.994px] items-start left-0 top-[501.87px] w-[328.417px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.6)]">Private sanctuary with infinity pool</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[19.986px] items-start left-0 top-[537.85px] w-[328.417px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.35px]">From $650/night</p>
    </div>
  );
}

function ImagePoolsideVilla() {
  return (
    <div className="absolute h-[437.889px] left-0 top-0 w-[328.417px]" data-name="Image (Poolside Villa)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePoolsideVilla} />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[437.889px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.2)] w-[328.417px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute h-[437.889px] left-0 overflow-clip top-0 w-[328.417px]" data-name="Container">
      <ImagePoolsideVilla />
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[557.84px] left-0 top-[1179.66px] w-[328.417px]" data-name="Container">
      <Heading4 />
      <Paragraph6 />
      <Paragraph7 />
      <Container14 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[1737.504px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container10 />
      <Container13 />
    </div>
  );
}

function RoomsSection() {
  return (
    <div className="bg-black h-[2073.467px] relative shrink-0 w-full" data-name="RoomsSection">
      <div className="content-stretch flex flex-col gap-[63.983px] items-start pt-[79.996px] px-[23.994px] relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[1133.29px] left-0 top-0 w-[376.404px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[rgba(0,0,0,0.7)] h-[1133.29px] left-0 top-0 w-[376.404px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[1133px] left-0 top-[226.66px] w-[376px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[39.989px] left-0 top-0 w-[328.417px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-0 not-italic text-[36px] text-white top-[-2.44px] tracking-[1.8px] whitespace-nowrap">Culinary Excellence</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[117.002px] left-0 top-[63.98px] w-[328.417px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[-0.78px] w-[329px]">Indulge in world-class cuisine crafted by Michelin-starred chefs. Our restaurants offer an unforgettable journey through innovative flavors and timeless classics.</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Le Jardin</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[47.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-3px] w-[329px]">Contemporary French cuisine with seasonal ingredients</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[83.987px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph9 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Rooftop Bar</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[47.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-3px] w-[329px]">Signature cocktails with breathtaking city views</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[83.987px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph10 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Tea Lounge</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[23.994px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Afternoon tea service in an elegant setting</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[59.993px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph11 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[275.953px] items-start left-0 top-[212.98px] w-[328.417px]" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[51.978px] left-0 top-[528.92px] w-[180.395px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[89.99px] not-italic text-[14px] text-black text-center top-[15px] tracking-[1.4px] whitespace-nowrap">RESERVE TABLE</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[580.897px] left-0 top-0 w-[328.417px]" data-name="Container">
      <Heading5 />
      <Paragraph8 />
      <Container21 />
      <Button2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[39.989px] relative shrink-0 w-[18.546px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-[9.5px] not-italic text-[36px] text-center text-white top-[-2.44px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[39.972px] relative shrink-0 w-[90.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45.5px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[-1px] tracking-[0.35px] w-[91px]">Michelin Stars</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[7.998px] items-center justify-center left-0 px-[1.11px] py-[34.125px] size-[156.211px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[39.989px] relative shrink-0 w-[18.546px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-[9px] not-italic text-[36px] text-center text-white top-[-2.44px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[39.972px] relative shrink-0 w-[90.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45.5px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[-1px] tracking-[0.35px] w-[91px]">Dining Venues</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[7.998px] items-center justify-center left-[172.21px] px-[1.11px] py-[34.125px] size-[156.211px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[39.989px] relative shrink-0 w-[68.806px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-[34.5px] not-italic text-[36px] text-center text-white top-[-2.44px] whitespace-nowrap">24/7</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[87.925px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center tracking-[0.35px] whitespace-nowrap">Room Service</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[7.998px] items-center justify-center left-0 px-[1.11px] py-[44.118px] size-[156.211px] top-[172.21px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[39.989px] relative shrink-0 w-[79.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-[40px] not-italic text-[36px] text-center text-white top-[-2.44px] whitespace-nowrap">200+</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[39.972px] relative shrink-0 w-[90.007px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[45.5px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[-1px] tracking-[0.35px] w-[91px]">Wine Selection</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[7.998px] items-center justify-center left-[172.21px] px-[1.11px] py-[34.125px] size-[156.211px] top-[172.21px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute left-0 size-[328.417px] top-[644.88px]" data-name="Container">
      <Container26 />
      <Container29 />
      <Container32 />
      <Container35 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[973.297px] left-[23.99px] top-[80px] w-[328.417px]" data-name="Container">
      <Container20 />
      <Container25 />
    </div>
  );
}

function DiningSection() {
  return (
    <div className="h-[1133.29px] overflow-clip relative shrink-0 w-full" data-name="DiningSection">
      <Container16 />
      <Container19 />
    </div>
  );
}

function ImageSpa() {
  return (
    <div className="absolute h-[410.512px] left-0 top-0 w-[328.417px]" data-name="Image (Spa)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSpa} />
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-gradient-to-t from-[#18181b] h-[410.512px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[328.417px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="absolute h-[410.512px] left-0 overflow-clip top-[640.85px] w-[328.417px]" data-name="Container">
      <ImageSpa />
      <Container40 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[39.989px] left-0 top-0 w-[328.417px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-0 not-italic text-[36px] text-white top-[-2.44px] tracking-[1.8px] whitespace-nowrap">{`Wellness & Spa`}</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[117.002px] left-0 top-[63.98px] w-[328.417px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[-0.78px] w-[329px]">Escape to our sanctuary of tranquility. Our award-winning spa offers a haven for rejuvenation, featuring state-of-the-art facilities and expert therapists.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9947 21.9947">
            <path d={svgPaths.p3f964000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99947 5.99842">
            <path d="M0.999737 0.999737V4.99868" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-1px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99842 1.99947">
            <path d="M4.99868 0.999737H0.999737" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-49.99%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99947 3.99947">
            <path d="M0.999737 0.999737V2.99974" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[79.16%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-1px_-49.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99947 1.99947">
            <path d="M2.99974 0.999737H0.999737" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-0 pb-[1.11px] pt-[13.099px] px-[13.099px] size-[50.191px] top-[3.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Signature Treatments</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[47.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-3px] w-[263px]">Bespoke therapies tailored to your needs</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[79.979px] items-start left-[66.19px] top-0 w-[262.23px]" data-name="Container">
      <Heading10 />
      <Paragraph13 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[79.979px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9963 13.9963">
            <path d={svgPaths.p6ce4000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-[41.67%] right-[41.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99842 5.99842">
            <path d={svgPaths.p16207f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99947 13.9963">
            <path d="M0.999737 0.999737V12.9966" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-[20.83%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99763 6.99816">
            <path d={svgPaths.p10a4f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-1/2 top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99763 6.99816">
            <path d={svgPaths.p1ac75d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-0 pb-[1.11px] pt-[13.099px] px-[13.099px] size-[50.191px] top-[3.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon2 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Aromatherapy</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[23.994px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Natural essences for deep relaxation</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[55.985px] items-start left-[66.19px] top-0 w-[256.28px]" data-name="Container">
      <Heading11 />
      <Paragraph14 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[55.985px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9942 19.9947">
            <path d={svgPaths.p2f69f600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start left-0 pb-[1.11px] pt-[13.099px] px-[13.099px] size-[50.191px] top-[3.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Icon3 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Wellness Programs</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[23.994px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Holistic approach to mind and body</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[55.985px] items-start left-[66.19px] top-0 w-[253.851px]" data-name="Container">
      <Heading12 />
      <Paragraph15 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[55.985px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[255.933px] items-start left-0 top-[228.97px] w-[328.417px]" data-name="Container">
      <Container43 />
      <Container46 />
      <Container49 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[51.978px] left-0 top-[524.89px] w-[204.128px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[102.49px] not-italic text-[14px] text-black text-center top-[15px] tracking-[1.4px] whitespace-nowrap">BOOK TREATMENT</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[576.872px] left-0 top-0 w-[328.417px]" data-name="Container">
      <Heading9 />
      <Paragraph12 />
      <Container42 />
      <Button3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[1051.367px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function SpaSection() {
  return (
    <div className="bg-[#18181b] h-[1211.36px] relative shrink-0 w-full" data-name="SpaSection">
      <div className="content-stretch flex flex-col items-start pt-[79.996px] px-[23.994px] relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[39.989px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-[164.63px] not-italic text-[36px] text-center text-white top-[-2.44px] tracking-[1.8px] whitespace-nowrap">Get In Touch</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[28.001px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[164.28px] not-italic text-[18px] text-[rgba(255,255,255,0.6)] text-center top-[-0.78px] whitespace-nowrap">{`We're here to make your stay exceptional`}</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[83.987px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Paragraph16 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9953 21.994">
            <path d={svgPaths.peabf700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99789 7.99789">
            <path d={svgPaths.p91bd700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative shrink-0 size-[50.191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.11px] pt-[13.099px] px-[13.099px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Address</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[47.987px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-3px] w-[207px]">
        <p className="leading-[24px] mb-0">123 Luxury Avenue</p>
        <p className="leading-[24px]">Downtown District, NY 10001</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[83.987px] relative shrink-0 w-[206.748px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.998px] items-start relative size-full">
        <Heading14 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[15.996px] h-[83.987px] items-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.63%_8.8%]" data-name="Vector">
        <div className="absolute inset-[-5.02%_-5.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.883 21.9224">
            <path d={svgPaths.p3ac56700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative shrink-0 size-[50.191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.11px] pt-[13.098px] px-[13.099px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Phone</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[47.987px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-3px] w-[131px]">
        <p className="leading-[24px] mb-0">+1 (555) 123-4567</p>
        <p className="leading-[24px]">Available 24/7</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[83.987px] relative shrink-0 w-[130.655px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.998px] items-start relative size-full">
        <Heading15 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[15.996px] h-[83.987px] items-start relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9942 17.9953">
            <path d={svgPaths.p1faedb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9945 7.99403">
            <path d={svgPaths.p390bb9c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.99947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative shrink-0 size-[50.191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.11px] pt-[13.099px] px-[13.099px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex h-[28.001px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[0.5px]">Email</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[47.987px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-3px] w-[186px]">
        <p className="leading-[24px] mb-0">reservations@maison.com</p>
        <p className="leading-[24px]">concierge@maison.com</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[83.987px] relative shrink-0 w-[185.287px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.998px] items-start relative size-full">
        <Heading16 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[15.996px] h-[83.987px] items-start relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[315.943px] items-start left-0 top-0 w-[328.417px]" data-name="Container">
      <Container56 />
      <Container59 />
      <Container62 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[58.206px] left-0 top-0 w-[328.417px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Your Name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[58.206px] left-0 top-[82.2px] w-[328.417px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Your Email</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[178.174px] left-0 top-[164.4px] w-[328.417px]" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Your Message</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.11px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[51.978px] left-0 top-[372.8px] w-[328.417px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[164.76px] not-italic text-[14px] text-black text-center top-[15px] tracking-[1.4px] whitespace-nowrap">SEND MESSAGE</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[424.773px] left-0 top-[379.93px] w-[328.417px]" data-name="Form">
      <TextInput />
      <EmailInput />
      <TextArea />
      <Button4 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[804.699px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Form />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[952.669px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[63.983px] items-start px-[23.994px] relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[31.992px] relative shrink-0 w-[94.968px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[32px] not-italic relative shrink-0 text-[24px] text-white tracking-[1.2px] whitespace-nowrap">MAISON</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[19.986px] relative shrink-0 w-[253.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">© 2026 Maison Hotel. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col h-[67.973px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[117.071px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[1.11px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[49.098px] px-[23.994px] relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[79.997px] h-[1309.729px] items-start pt-[79.996px] relative shrink-0 w-full" data-name="ContactSection">
      <Container52 />
      <Container65 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[6659.47px] items-start left-0 top-0 w-[376.404px]" data-name="App">
      <HeroSection />
      <RoomsSection />
      <DiningSection />
      <SpaSection />
      <ContactSection />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[14.99px] items-start left-[11.99px] top-[31.97px] w-[27.481px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Home</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[21.985px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33205 10.0763">
            <path d={svgPaths.pff1b380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83205" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.332 19.2361">
            <path d={svgPaths.p93b2580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83205" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[14.74px] size-[22px] top-[5px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container70() {
  return <div className="absolute bg-white left-[23.73px] rounded-[37256700px] size-[3.99px] top-[-2px]" data-name="Container" />;
}

function Button5() {
  return (
    <div className="absolute h-[54.962px] left-[17.66px] top-[11.99px] w-[51.457px]" data-name="Button">
      <Text />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[19.986px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_91.67%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66551 14.9895">
            <path d="M0.832753 0.832753V14.1568" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_8.33%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3206 11.6585">
            <path d={svgPaths.pbfe2880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3206 1.66551">
            <path d="M0.832753 0.832753H17.4878" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/4 right-3/4 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66551 9.16028">
            <path d="M0.832753 0.832753V8.32753" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 size-[19.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[14.99px] relative shrink-0 w-[31.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Rooms</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[54.962px] items-center left-[88.46px] pt-[7.998px] top-[11.99px] w-[55.031px]" data-name="Button">
      <Container71 />
      <Text1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[19.986px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_53.51%_53.51%]" data-name="Vector">
        <div className="absolute inset-[-10.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.2915 9.2915">
            <path d={svgPaths.p1027ebe} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.75%_8.33%_8.33%_8.5%]" data-name="Vector">
        <div className="absolute inset-[-5.35%_-5.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2878 17.238">
            <path d={svgPaths.p366b7400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[64.58%_64.58%_9.17%_8.75%]" data-name="Vector">
        <div className="absolute inset-[-15.87%_-15.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99512 6.91185">
            <path d={svgPaths.p385fe5c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49477 7.49477">
            <path d={svgPaths.p6a8dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 size-[19.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[14.99px] relative shrink-0 w-[30.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Dining</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[54.962px] items-center left-[162.84px] pt-[7.998px] top-[11.99px] w-[54.06px]" data-name="Button">
      <Container72 />
      <Text2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[19.986px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[40%]" data-name="Vector">
        <div className="absolute inset-[-20.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66272 5.66272">
            <path d={svgPaths.p11db5600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[44.36%_8.04%_8.04%_44.36%]" data-name="Vector">
        <div className="absolute inset-[-8.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1797 11.1797">
            <path d={svgPaths.p106bf80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.75%_10.42%_10.42%_83.75%]" data-name="Vector">
        <div className="absolute inset-[-71.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83136 2.83136">
            <path d={svgPaths.p2ff98900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.42%_83.75%_83.75%_10.42%]" data-name="Vector">
        <div className="absolute inset-[-71.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83136 2.83136">
            <path d={svgPaths.p2ff98900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.04%_44.36%_44.36%_8.04%]" data-name="Vector">
        <div className="absolute inset-[-8.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1797 11.1797">
            <path d={svgPaths.p30f12280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[19.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[14.99px] relative shrink-0 w-[16.568px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Spa</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[54.962px] items-center left-[236.24px] pt-[7.998px] top-[11.99px] w-[43.962px]" data-name="Button">
      <Container73 />
      <Text3 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[19.986px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.63%_8.8%]" data-name="Vector">
        <div className="absolute inset-[-5.02%_-5.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2279 18.2608">
            <path d={svgPaths.p26698850} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.66551" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[19.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[14.99px] relative shrink-0 w-[35.149px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[54.962px] items-center left-[299.55px] pt-[7.998px] top-[11.99px] w-[59.125px]" data-name="Button">
      <Container74 />
      <Text4 />
    </div>
  );
}

function MobileNav() {
  return (
    <div className="h-[78.938px] relative shrink-0 w-full" data-name="MobileNav">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] content-stretch flex flex-col h-[80.048px] items-start left-0 pt-[1.11px] top-[771.58px] w-[376.404px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[1.11px] inset-0 pointer-events-none" />
      <MobileNav />
    </div>
  );
}

export default function ModernOnePageSiteCopy() {
  return (
    <div className="bg-white relative size-full" data-name="Modern One Page Site (Copy)">
      <App />
      <App1 />
    </div>
  );
}
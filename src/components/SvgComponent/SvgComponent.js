

import * as React from "react"

const SvgComponent = (props) => {

  const {name, domain,color, image}=props;
  
  
  return(
  <svg xmlns="http://www.w3.org/2000/svg" width={807} height={598} {...props}>
    <defs>
      <filter
        id="b"
        x={135}
        y={34}
        width={830}
        height={602}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={32} />
        <feGaussianBlur stdDeviation={25} result="c" />
        <feFlood floodOpacity={0.059} />
        <feComposite operator="in" in2="c" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="e"
        x={276}
        y={273}
        width={573}
        height={46}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} />
        <feGaussianBlur result="f" />
        <feFlood floodColor="#c1d2db" />
        <feComposite operator="in" in2="f" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="g"
        x={276}
        y={320}
        width={573}
        height={46}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} />
        <feGaussianBlur result="h" />
        <feFlood floodColor="#c1d2db" />
        <feComposite operator="in" in2="h" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="i"
        x={276}
        y={367}
        width={573}
        height={46}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} />
        <feGaussianBlur result="j" />
        <feFlood floodColor="#c1d2db" />
        <feComposite operator="in" in2="j" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="k"
        x={276}
        y={414}
        width={573}
        height={46}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} />
        <feGaussianBlur result="l" />
        <feFlood floodColor="#c1d2db" />
        <feComposite operator="in" in2="l" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="m"
        x={276}
        y={461}
        width={573}
        height={46}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} />
        <feGaussianBlur result="n" />
        <feFlood floodColor="#c1d2db" />
        <feComposite operator="in" in2="n" />
        <feComposite in="SourceGraphic" />
      </filter>
      <clipPath id="a">
        <path
          transform="translate(1093 225)"
          style={{
            stroke: "#707070",
            fill: "#fff",
          }}
          d="M0 0h807v598H0z"
        />
      </clipPath>
      <clipPath id="d">
        <path
          className="b"
          transform="translate(3689 642)"
          d="M0 0h680v452H0z"
        />
      </clipPath>
      <clipPath id="o">
        <path
          className="c"
          d="M5 0h675v447a5 5 0 0 1-5 5H0V5a5 5 0 0 1 5-5Z"
          transform="translate(3689 642)"
        />
      </clipPath>
      <style>
        {
          `.b,.k{fill:#fff}.b{stroke:#e4e4e4}.c{fill:#f5f6f8}.ac,.h{fill:none}.h{stroke:${color !=='' ? color : '#39b0ff' }}.r{opacity:.5}.n{fill:#bcbec1}.p{fill:#e1e8eb}.aa,.r{fill:#cfd0d2}.s{fill:${color !=='' ? color : '#39b0ff' }}.u{fill:#dfdfdf}.v{fill:#538944}.v,.w{font-size:14px}.v{font-family:OpenSans-SemiBold,Open Sans;font-weight:600}.w{font-family:OpenSans-Regular,Open Sans}.af{stroke:none}`
        }
      </style>
    </defs>
    <g
      transform="translate(-1093 -225)"
      style={{
        clipPath: "url(#a)",
      }}
    >
      <g transform="translate(1335.787 224.819)">
        <circle
          cx={37.944}
          cy={37.944}
          transform="translate(211.027 21.048)"
          style={{
            fill: "#feaf31",
          }}
          r={37.944}
        />
        <path
          transform="rotate(30 148.926 558.42)"
          style={{
            fill: "#f5f5f5",
          }}
          d="M0 0h70.618v187.611H0z"
        />
        <path
          d="M344.817 589.12c-5.217 3.069-11.438 7.973-18.217 15.848"
          transform="translate(-170.071 -428.453)"
          style={{
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
          }}
        />
      </g>
      <g className="h" transform="translate(1531.799 250.927)">
        <circle className="af" cx={3.502} cy={3.502} r={3.502} />
        <circle className="ac" cx={3.502} cy={3.502} r={3.002} />
      </g>
      <path
        transform="translate(1238.562 573.546)"
        style={{
          opacity: 0.5,
          fill: "#eaf0ff",
        }}
        d="M0 0h102.37v97.16H0z"
      />
      <path
        d="M569.246 70.93 517.6 119.941l98.022 55.859Z"
        transform="translate(672.187 431.889)"
        style={{
          fill: "#d8dfff",
        }}
      />
      <g className="h" transform="translate(1175.7 608.964)">
        <circle className="af" cx={3.502} cy={3.502} r={3.502} />
        <circle className="ac" cx={3.502} cy={3.502} r={3.002} />
      </g>
      <g className="h" transform="translate(1221.722 687.001)">
        <circle className="af" cx={3.502} cy={3.502} r={3.502} />
        <circle className="ac" cx={3.502} cy={3.502} r={3.002} />
      </g>
      <g transform="translate(-2386 -340)">
        <path
          className="k"
          d="M5 0h675v447a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5Z"
          transform="translate(3689 642)"
          style={{
            filter: "url(#b)",
          }}
        />
        <g
          style={{
            clipPath: "url(#d)",
          }}
        >
          <g className="b">
            <path className="af" d="M3689 717h688v377h-688z" />
            <path className="ac" d="M3689.5 717.5h687v376h-687z" />
          </g>
          <g
            transform="translate(3767 688)"
            style={{
              stroke: "#196fc1",
              fill: "#f5f6f8",
            }}
          >
            <rect className="af" width={626} height={24} rx={12} />
            <rect
              className="ac"
              x={0.5}
              y={0.5}
              width={625}
              height={23}
              rx={11.5}
            />
          </g>
        </g>
        <g transform="translate(-28 -11)">
          <path
            className="n"
            d="M3781 849h8v46h-8zM3781 896h8v46h-8zM3781 990h8v46h-8zM3781 1037h8v46h-8z"
          />
          <path
            className="c"
            transform="translate(3783 849)"
            d="M0 0h573v45H0z"
            style={{
              filter: "url(#e)",
            }}
          />
          <path
            className="c"
            transform="translate(3783 896)"
            d="M0 0h573v45H0z"
            style={{
              filter: "url(#g)",
            }}
          />
          <g
            style={{
              filter: "url(#i)",
            }}
          >
            <path
              transform="translate(3783 943)"
              style={{
                fill: "#c7e4ff",
              }}
              d="M0 0h573v45H0z"
            />
          </g>
          <path
            className="c"
            transform="translate(3783 990)"
            d="M0 0h573v45H0z"
            style={{
              filter: "url(#k)",
            }}
          />
          <path
            className="c"
            transform="translate(3783 1037)"
            d="M0 0h573v45H0z"
            style={{
              filter: "url(#m)",
            }}
          />
          <path
            className="p"
            d="M4119 849h177v45h-177zM4119 896h177v45h-177z"
          />
          <path
            transform="translate(4119 943)"
            style={{
              fill: "#b4d5f5",
            }}
            d="M0 0h177v45H0z"
          />
          <path
            className="p"
            d="M4119 990h177v45h-177zM4119 1037h177v45h-177z"
          />
          <rect
            className="r"
            width={145}
            height={19}
            rx={9.5}
            transform="translate(3781 817)"
          />
          <rect
            className="r"
            width={107}
            height={9}
            rx={4.5}
            transform="translate(3797 867)"
          />
          <rect
            className="r"
            width={107}
            height={9}
            rx={4.5}
            transform="translate(3910 867)"
          />
          <rect
            className="r"
            width={83}
            height={9}
            rx={4.5}
            transform="translate(4135 867)"
          />
          <rect
            className="r"
            width={28}
            height={9}
            rx={4.5}
            transform="translate(4135 913)"
          />
          <rect
            className="r"
            width={85}
            height={9}
            rx={4.5}
            transform="translate(4169 913)"
          />
          <rect
            className="s"
            width={95}
            height={9}
            rx={4.5}
            transform="translate(4135 960)"
          />
          <rect
            className="r"
            width={28}
            height={9}
            rx={4.5}
            transform="translate(4226 1007)"
          />
          <rect
            className="r"
            width={85}
            height={9}
            rx={4.5}
            transform="translate(4135 1007)"
          />
          <rect
            className="r"
            width={102}
            height={9}
            rx={4.5}
            transform="translate(4135 1054)"
          />
          <rect
            className="r"
            width={51}
            height={9}
            rx={4.5}
            transform="translate(4023 867)"
          />
          <rect
            className="r"
            width={44}
            height={9}
            rx={4.5}
            transform="translate(3797 913)"
          />
          <rect
            className="s"
            width={117}
            height={9}
            rx={4.5}
            transform="translate(3797 960)"
          />
          <rect
            className="r"
            width={103}
            height={9}
            rx={4.5}
            transform="translate(3847 913)"
          />
          <rect
            className="r"
            width={44}
            height={9}
            rx={4.5}
            transform="translate(3816 1054)"
          />
          <rect
            className="r"
            width={103}
            height={9}
            rx={4.5}
            transform="translate(3797 1007)"
          />
          <rect
            className="r"
            width={72}
            height={9}
            rx={4.5}
            transform="translate(3975 913)"
          />
          <rect
            className="s"
            width={103}
            height={9}
            rx={4.5}
            transform="translate(3920 960)"
          />
          <rect
            className="r"
            width={13}
            height={9}
            rx={4.5}
            transform="translate(3956 913)"
          />
          <rect
            className="r"
            width={44}
            height={9}
            rx={4.5}
            transform="translate(4015 1007)"
          />
          <rect
            className="s"
            width={44}
            height={9}
            rx={4.5}
            transform="translate(4029 960)"
          />
          <rect
            className="r"
            width={103}
            height={9}
            rx={4.5}
            transform="translate(3906 1007)"
          />
          <rect
            className="r"
            width={103}
            height={9}
            rx={4.5}
            transform="translate(3866 1054)"
          />
          <rect
            className="r"
            width={13}
            height={9}
            rx={4.5}
            transform="translate(4065 1007)"
          />
          <rect
            className="r"
            width={112}
            height={9}
            rx={4.5}
            transform="translate(3975 1054)"
          />
          <rect
            className="r"
            width={13}
            height={9}
            rx={4.5}
            transform="translate(3797 1054)"
          />
          <path className="s" d="M3781 943h6v46h-6z" />
        </g>
        <path
          d="M5 0h675v42H0V5a5 5 0 0 1 5-5Z"
          transform="translate(3689 642)"
          style={{
            fill: "#e7eaee",
          }}
        />
        <path className="u" d="M3689 716h680v1h-680z" />
        <path
          className="k"
          d="M3716.049 651h192.556c3.97 0 7.189 2.239 7.189 5v21s-.331 7 8.659 7h-223.222c6.676 0 7.629-7 7.629-7v-21c.001-2.762 3.219-5 7.189-5Z"
        />
        <text className="v" transform="translate(3791.538 705.215)">
          <tspan x={0} y={0}>
            {"Secure"}
          </tspan>
        </text>
        <text className="v" transform="translate(3850.538 705.215)">
          <tspan x={0} y={0}>
            {"https:"}
          </tspan>
        </text>
        <text className="w" transform="translate(3892.538 705.215)">
          <tspan x={0} y={0}>
            {domain !=='' ? domain+'.dofleini.com' : 'mi_dominio.plankton.com/proyectos/plan_de_ventas'}
          </tspan>
        </text>
        <text className="w" transform="translate(3742.538 673.215)">
          <tspan x={0} y={0}>
            {name !=='' ? name : 'Plankton-Mi Espacio'}
          </tspan>
        </text>
        <path
          transform="translate(3843 692)"
          style={{
            opacity: 0.2,
            fill: "#2b2b2b",
          }}
          d="M0 0h1v16H0z"
        />

        {image !==null ? (<image href={image} height={30} width={30} transform="translate(3710 650)" />) :(<>
        
        <circle
          className="u"
          cx={10}
          cy={10}
          r={10}
          transform="translate(3716 658)"
        />
        <g transform="translate(3719.776 661.963)">
          <rect
            className="k"
            width={10.252}
            height={2.239}
            rx={1.12}
            transform="translate(0 6.718)"
          />
          <rect
            className="k"
            width={7.831}
            height={2.239}
            rx={1.12}
            transform="translate(2.421)"
          />
          <rect
            className="k"
            width={6.155}
            height={2.239}
            rx={1.12}
            transform="translate(6.337 3.359)"
          />
          <rect
            className="k"
            width={4.479}
            height={2.239}
            rx={1.12}
            transform="translate(.182 3.359)"
          />
          <rect
            className="k"
            width={4.479}
            height={2.239}
            rx={1.12}
            transform="translate(.182 10.097)"
          />
        </g></> )}

        

        
        
        <g
          style={{
            clipPath: "url(#o)",
          }}
        >
          <g transform="translate(3689 716)">
            <g className="b">
              <path className="af" d="M0 0h49v378H0z" />
              <path className="ac" d="M.5.5h48v377H.5z" />
            </g>
            <rect
              width={34}
              height={37}
              rx={3}
              transform="translate(7 90)"
              style={{
                fill: "#ebf7ff",
              }}
            />
            <g transform="translate(14 14.941)">
              <rect
                className="aa"
                width={21.244}
                height={4.641}
                rx={2.32}
                transform="translate(0 13.922)"
              />
              <rect
                className="aa"
                width={16.227}
                height={4.641}
                rx={2.32}
                transform="translate(5.009)"
              />
              <rect
                className="aa"
                width={12.754}
                height={4.641}
                rx={2.32}
                transform="translate(13.122 6.961)"
              />
              <rect
                className="aa"
                width={9.281}
                height={4.641}
                rx={2.32}
                transform="translate(0 6.961)"
              />
              <rect
                className="aa"
                width={9.281}
                height={4.641}
                rx={2.32}
                transform="translate(0 20.922)"
              />
            </g>
            <g transform="translate(12.827)">
              <circle
                className="aa"
                cx={11.5}
                cy={11.5}
                r={11.5}
                transform="translate(.173 205)"
              />
              <circle
                className="aa"
                cx={11.5}
                cy={11.5}
                r={11.5}
                transform="translate(.173 169)"
              />
              <circle
                className="aa"
                cx={11.5}
                cy={11.5}
                r={11.5}
                transform="translate(.173 133)"
              />
              <circle
                className="s"
                cx={11.5}
                cy={11.5}
                r={11.5}
                transform="translate(.173 97)"
              />
              <circle
                className="aa"
                cx={11.5}
                cy={11.5}
                r={11.5}
                transform="translate(.173 61)"
              />
            </g>
          </g>
          <g transform="translate(3737 716)">
            <g className="b">
              <path className="af" d="M0 0h589v56H0z" />
              <path className="ac" d="M.5.5h588v55H.5z" />
            </g>
            <rect
              className="s"
              width={119}
              height={32}
              rx={16}
              transform="translate(409 12)"
            />
            <path
              d="M255.65 4329.04a1 1 0 0 1 .56 1.75l-3.67 3.18 1.1 4.73a1 1 0 0 1-1.49 1.08l-4.15-2.51-4.15 2.5a1 1 0 0 1-1.49-1.08l1.1-4.72-3.67-3.18a1 1 0 0 1 .57-1.75l4.83-.41 1.89-4.459a1 1 0 0 1 1.84 0l1.89 4.45 4.84.42Z"
              transform="translate(-4 -4304)"
              style={{
                fill: "#ffc60a",
              }}
            />
            <rect
              className="r"
              width={211}
              height={21}
              rx={10.5}
              transform="translate(16 18)"
            />
          </g>
        </g>
        <path className="ac" d="M3740 693h14.931v14.931H3740Z" />
        <path d="M3750.985 696.951a4.978 4.978 0 1 0 1.294 4.759h-1.294a3.731 3.731 0 1 1-3.519-4.977 3.68 3.68 0 0 1 2.625 1.107l-2 2h4.355v-4.351Z" />
        <g
          style={{
            opacity: 0.2,
          }}
        >
          <path className="ac" d="M3718 693h15v15h-15Z" />
          <path d="m3725.5 695.5-.881.881 3.488 3.494h-7.607v1.25h7.606l-3.487 3.494.881.881 5-5Z" />
        </g>
        <path className="ac" d="M3712 693h-15v15h15Z" />
        <path d="m3704.5 695.5.881.881-3.487 3.494h7.606v1.25h-7.606l3.488 3.494-.882.881-5-5Z" />
        <path className="ac" d="M3891.797 660.796h14.407v14.407h-14.407Z" />
        <path d="m3903.199 664.644-.842-.846-3.358 3.356-3.354-3.356-.846.846 3.356 3.354-3.356 3.358.846.846 3.354-3.355 3.358 3.351.846-.846-3.355-3.354Z" />
        <path className="ac" d="M3924.893 658.524h17.583v17.583h-17.583Z" />
        <path d="M3938.813 668.048h-4.4v4.4h-1.457v-4.4h-4.4v-1.461h4.4v-4.4h1.465v4.4h4.4Z" />
        <path className="ac" d="M3776 693.857h12.794v12.794H3776Z" />
        <path
          d="M11.463 4.732h-.533V3.665a2.665 2.665 0 1 0-5.331 0v1.067h-.533A1.069 1.069 0 0 0 4 5.8v5.331a1.069 1.069 0 0 0 1.066 1.066h6.4a1.069 1.069 0 0 0 1.066-1.066V5.8a1.069 1.069 0 0 0-1.069-1.068Zm-3.2 4.8a1.066 1.066 0 1 1 1.068-1.069 1.069 1.069 0 0 1-1.066 1.066Zm1.653-4.8H6.612V3.665a1.653 1.653 0 1 1 3.305 0Z"
          transform="translate(3774.132 693.39)"
          style={{
            fill: "#538944",
          }}
        />
      </g>
    </g>
  </svg>
)

}

export default SvgComponent

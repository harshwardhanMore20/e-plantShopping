// Hand-built line-art plant illustrations in a consistent herbarium style.
// Every variant shares the same pot + ground motif so the catalog reads as one set.

const Pot = () => (
  <g>
    <path
      d="M70 168 L130 168 L124 196 Q100 202 76 196 Z"
      fill="var(--clay)"
      stroke="var(--ink)"
      strokeWidth="1.5"
    />
    <rect x="64" y="158" width="72" height="12" rx="3" fill="var(--clay-dark)" stroke="var(--ink)" strokeWidth="1.5" />
  </g>
)

const leafStroke = { stroke: 'var(--ink)', strokeWidth: 1.4, strokeLinejoin: 'round', strokeLinecap: 'round' }

function Pothos() {
  return (
    <>
      <path d="M100 160 C 70 150, 40 120, 30 80" fill="none" stroke="var(--moss)" strokeWidth="2.5" />
      <path d="M100 160 C 130 145, 155 110, 158 70" fill="none" stroke="var(--moss)" strokeWidth="2.5" />
      {[[40,118,'-18'],[34,95,'-30'],[126,108,'18'],[146,84,'30'],[60,135,'-8'],[112,140,'10']].map(([x,y,r],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="16" ry="11" fill="var(--leaf)" {...leafStroke} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      <ellipse cx="92" cy="150" rx="17" ry="12" fill="var(--leaf-light)" {...leafStroke} />
    </>
  )
}

function Snake() {
  const blades = [-26,-15,-5,5,15,26]
  return (
    <>
      {blades.map((rot,i) => (
        <path
          key={i}
          d="M100 160 C 96 120, 94 80, 100 40 C 106 80, 104 120, 100 160 Z"
          fill="var(--leaf)"
          {...leafStroke}
          transform={`rotate(${rot} 100 160) translate(${i % 2 === 0 ? -2 : 2} 0)`}
        />
      ))}
      {blades.map((rot,i) => (
        <path
          key={`s${i}`}
          d="M100 150 C 99 120 99 90 100 60"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
          transform={`rotate(${rot} 100 160)`}
        />
      ))}
    </>
  )
}

function Zz() {
  const stems = [-22,-10,4,18]
  return (
    <>
      {stems.map((rot,i) => (
        <g key={i} transform={`rotate(${rot} 100 160)`}>
          <path d="M100 160 C 99 120 98 80 97 50" fill="none" stroke="var(--moss)" strokeWidth="2" />
          {[60,75,90,105,120,135,150].map((y,j) => (
            <ellipse key={j} cx={j % 2 === 0 ? 97 - 9 : 97 + 9} cy={y} rx="8" ry="5.5" fill="var(--leaf-light)" {...leafStroke} />
          ))}
        </g>
      ))}
    </>
  )
}

function PeaceLily() {
  return (
    <>
      {[-24,-10,10,24].map((rot,i) => (
        <path key={i} d="M100 160 C 92 120 92 90 100 60 C 108 90 108 120 100 160 Z" fill="var(--leaf)" {...leafStroke} transform={`rotate(${rot} 100 160)`} />
      ))}
      <path d="M100 95 C 95 70 95 55 100 40 C 105 55 105 70 100 95 Z" fill="var(--cream)" {...leafStroke} />
      <ellipse cx="100" cy="68" rx="2.5" ry="14" fill="var(--gold)" />
    </>
  )
}

function Jasmine() {
  return (
    <>
      <path d="M100 160 C 70 145 130 120 70 95 C 130 75 75 55 105 35" fill="none" stroke="var(--moss)" strokeWidth="2" />
      {[[78,140],[112,128],[80,108],[110,90],[78,70],[100,45]].map(([x,y],i)=>(
        <g key={i}>
          {[0,72,144,216,288].map((a)=>(
            <ellipse key={a} cx={x} cy={y} rx="3.4" ry="7" fill="var(--cream)" stroke="var(--ink)" strokeWidth="0.8" transform={`rotate(${a} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r="2.2" fill="var(--gold)" />
        </g>
      ))}
    </>
  )
}

function Anthurium() {
  return (
    <>
      {[-20,0,20].map((rot,i) => (
        <path key={i} d="M100 160 C 96 130 96 110 100 95" fill="none" stroke="var(--moss)" strokeWidth="2" transform={`rotate(${rot} 100 160)`} />
      ))}
      {[[78,95,-12],[122,90,12],[100,70,0]].map(([x,y,r],i)=>(
        <path key={i} d={`M${x} ${y} C ${x-18} ${y-6} ${x-14} ${y-26} ${x} ${y-30} C ${x+14} ${y-26} ${x+18} ${y-6} ${x} ${y} Z`} fill="var(--bloom)" {...leafStroke} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {[[78,82],[122,77],[100,57]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y+8} rx="2" ry="9" fill="var(--gold)" />
      ))}
      <ellipse cx="100" cy="150" rx="20" ry="12" fill="var(--leaf)" {...leafStroke} />
    </>
  )
}

function Monstera() {
  const leaf = (x,y,scale,rot) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <path
        d="M0 0 C -22 -6 -30 -26 -18 -40 C -10 -30 -4 -28 0 -42 C 4 -28 10 -30 18 -40 C 30 -26 22 -6 0 0 Z"
        fill="var(--leaf)"
        {...leafStroke}
      />
      <ellipse cx="-12" cy="-22" rx="3" ry="5" fill="var(--cream)" />
      <ellipse cx="12" cy="-22" rx="3" ry="5" fill="var(--cream)" />
    </g>
  )
  return (
    <>
      <path d="M100 160 C 96 130 96 100 100 75" fill="none" stroke="var(--moss)" strokeWidth="2.5" />
      {leaf(70,118,1.05,-18)}
      {leaf(132,108,1.1,16)}
      {leaf(100,75,1.25,0)}
    </>
  )
}

function Fiddle() {
  const leaf = (x,y,rot,scale=1) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <path d="M0 30 C -20 18 -22 -10 0 -34 C 22 -10 20 18 0 30 Z" fill="var(--leaf)" {...leafStroke} />
      <path d="M0 26 C 0 8 0 -10 0 -28" stroke="var(--ink)" strokeWidth="0.8" fill="none" />
    </g>
  )
  return (
    <>
      <path d="M100 160 C 99 130 99 100 100 80" fill="none" stroke="var(--moss)" strokeWidth="2.5" />
      {leaf(74,128,-14,0.8)}
      {leaf(126,118,12,0.85)}
      {leaf(100,80,0,1)}
      {leaf(112,60,8,0.7)}
    </>
  )
}

function Calathea() {
  const leaf = (x,y,rot) => (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse cx="0" cy="0" rx="13" ry="24" fill="var(--leaf)" {...leafStroke} />
      {[-14,-7,0,7,14].map((o,i)=>(
        <path key={i} d={`M0 -2 L${o} -20`} stroke="var(--leaf-light)" strokeWidth="1" />
      ))}
    </g>
  )
  return (
    <>
      {[[78,135,-20],[100,150,0],[122,135,20],[88,108,-8],[112,108,8]].map(([x,y],i)=>(
        <path key={`s${i}`} d={`M${x} ${y+18} L${x} 160`} stroke="var(--moss)" strokeWidth="2" />
      ))}
      {[[78,135,-20],[100,150,0],[122,135,20],[88,108,-8],[112,108,8]].map(([x,y,r],i)=>(
        <g key={i}>{leaf(x,y,r)}</g>
      ))}
    </>
  )
}

const VARIANTS = {
  pothos: Pothos,
  snake: Snake,
  zz: Zz,
  peacelily: PeaceLily,
  jasmine: Jasmine,
  anthurium: Anthurium,
  monstera: Monstera,
  fiddle: Fiddle,
  calathea: Calathea,
}

export default function PlantIllustration({ variant, className }) {
  const Leaf = VARIANTS[variant] || Pothos
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-hidden="true">
      <circle cx="100" cy="100" r="98" fill="var(--plate)" />
      <ellipse cx="100" cy="184" rx="46" ry="6" fill="var(--shadow)" opacity="0.5" />
      <Leaf />
      <Pot />
    </svg>
  )
}

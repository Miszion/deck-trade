const Plus = (props : any) => {

    const {color} = props

    return (
        <svg height='50px' width='50px'  fill={color ? color : '#20232a'} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve"><path d="M39.9489517,60.0510406H10.039155c-1.1043043,0-1.9933624-0.8984184-1.9933624-2.0027237V41.9423218  c0-1.1043015,0.8890581-1.9933624,1.9933624-1.9933624h29.9097977V10.0391645c0-1.1043043,0.8890572-1.9933624,1.9933624-1.9933624  h16.1059952c1.1043015,0,2.0027199,0.8890581,2.0027199,1.9933624v29.9097939h29.9004402  c1.1043015,0,2.0027161,0.889061,2.0027161,1.9933624V58.048317c0,1.1043053-0.8984146,2.0027237-2.0027161,2.0027237H60.0510292  v29.9004364c0,1.1043015-0.8984184,2.0027237-2.0027199,2.0027237H41.9423141c-1.1043053,0-1.9933624-0.8984222-1.9933624-2.0027237  V60.0510406z"></path>
            {props.children}
        </svg>
    )
}

export default Plus
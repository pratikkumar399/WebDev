function Profile(props) {

    return (
        <section class="flex h-100 w-100  space-x-5">
            <h1 ><strong>Amazing scientists</strong></h1>
            <img src={'https://i.imgur.com/' + props.person.id} alt={props.person.name}
                width={props.size.width}
                height={props.size.height} />
            <img src={'https://i.imgur.com/' + props.person.id} alt="Katherine Johnson" />
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </section>
    )

}
export default Profile;
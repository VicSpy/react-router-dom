import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.JPG'


const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Victor!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto do Victor'
                className={styles.fotoSobreMim}
            />

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla. Nibh praesent tristique magna sit. Facilisi etiam dignissim diam quis enim. Neque ornare aenean euismod elementum nisi quis. Non diam phasellus vestibulum lorem. Euismod nisi porta lorem mollis aliquam. Condimentum id venenatis a condimentum vitae sapien pellentesque. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Suscipit tellus mauris a diam maecenas sed enim ut. Augue eget arcu dictum varius duis at consectetur. Sit amet dictum sit amet justo donec enim diam vulputate. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tincidunt augue interdum velit euismod in pellentesque.
            </p>
            <p>
                Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Porta nibh venenatis cras sed felis eget velit aliquet. Habitant morbi tristique senectus et netus et. Et sollicitudin ac orci phasellus egestas. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Suscipit tellus mauris a diam maecenas sed. Auctor eu augue ut lectus arcu bibendum at varius. Odio ut sem nulla pharetra. Sed nisi lacus sed viverra tellus. Magna fringilla urna porttitor rhoncus dolor. Eget felis eget nunc lobortis. Ut faucibus pulvinar elementum integer enim neque volutpat. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Id volutpat lacus laoreet non curabitur gravida arcu ac. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. At tellus at urna condimentum mattis pellentesque id nibh.
            </p>
            <p>
                Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Eu consequat ac felis donec et. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Urna id volutpat lacus laoreet non. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Vel risus commodo viverra maecenas. Aliquam ut porttitor leo a. Nunc id cursus metus aliquam eleifend. Pellentesque dignissim enim sit amet venenatis. Vehicula ipsum a arcu cursus. Ut aliquam purus sit amet.
            </p>
            <p>
                Ut enim blandit volutpat maecenas. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Adipiscing tristique risus nec feugiat in. Tellus in hac habitasse platea dictumst vestibulum. Amet luctus venenatis lectus magna fringilla urna. Lobortis feugiat vivamus at augue eget arcu dictum. In nulla posuere sollicitudin aliquam ultrices sagittis. Sed libero enim sed faucibus turpis in eu. Aliquam ultrices sagittis orci a scelerisque purus. Molestie nunc non blandit massa enim nec dui. Convallis a cras semper auctor neque. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Ac orci phasellus egestas tellus rutrum tellus. Et sollicitudin ac orci phasellus egestas. Justo donec enim diam vulputate ut pharetra. Diam quis enim lobortis scelerisque fermentum dui faucibus. Nunc mattis enim ut tellus elementum sagittis vitae.
            </p>
            <p>
                Et netus et malesuada fames. Velit aliquet sagittis id consectetur purus. Bibendum arcu vitae elementum curabitur vitae. Viverra maecenas accumsan lacus vel facilisis. Amet consectetur adipiscing elit duis. Posuere ac ut consequat semper viverra. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Ut ornare lectus sit amet est placerat in egestas. Pellentesque nec nam aliquam sem et. Pretium lectus quam id leo in vitae. Scelerisque eu ultrices vitae auctor eu augue ut. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Eu sem integer vitae justo eget magna fermentum. Cum sociis natoque penatibus et magnis dis parturient montes. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tristique et egestas quis ipsum suspendisse ultrices gravida.
            </p>
            <p>
                Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Consequat nisl vel pretium lectus quam id leo in vitae. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Donec massa sapien faucibus et molestie ac feugiat. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Condimentum lacinia quis vel eros donec ac. Nec ultrices dui sapien eget mi proin. Auctor elit sed vulputate mi sit amet. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Lacus viverra vitae congue eu consequat ac. Urna porttitor rhoncus dolor purus non enim praesent elementum. Egestas sed sed risus pretium quam. Eu mi bibendum neque egestas congue quisque. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.
            </p>
        </PostModelo>
    )
}

export default SobreMim
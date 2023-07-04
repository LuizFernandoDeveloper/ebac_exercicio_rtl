import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const Post = ({ children }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={'https://i.uai.com.br/oQyJL4f1KVaK4TvFM2mkZXSfkkI=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2023/02/12/317708/batman-nos-quadrinhos-da-dc_1_59778.jpg'} />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;
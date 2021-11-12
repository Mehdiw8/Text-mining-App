import React,{ useRef ,useEffect } from 'react';
import styles from './CSSFile/Header.module.css';
import { FaHome ,FaUsers,FaUserPlus } from "react-icons/fa";
import { MdOutlinePhonelinkRing ,MdQuiz } from "react-icons/md";
import { HiOutlineLogin} from "react-icons/hi";
import {Link} from "react-router-dom"
const Header = () => {
        
       
                
        return (
                <div className={styles.headWrapper}>
                        <header className={styles.header}>
                             <section className={styles.headerContent}>
                                 <section className={styles.logo}>
                                        <div>
                                               <span>S</span>
                                               <span>p</span>
                                               <span>e</span>
                                               <span>l</span>
                                               <span>l</span>
                                               <span>C</span>
                                               <span>h</span>
                                               <span>e</span>
                                               <span>c</span>
                                               <span>k</span>
                                               <span>e</span>
                                               <span>r</span>

                                        </div>
                                </section>
                                <div className={styles.line}></div>
                                <menu className={styles.menuWrapper}>
                                       <nav className={styles.menuWrapperUl1}>
                                                <ul>
                                                        <li><a href="/">
                                                                 <FaHome /> 
                                                                خانه</a>
                                                                 </li>
                                                        <li>
                                                        <a href="/">
                                                                <MdQuiz />
                                                                سوالات متداول</a>
                                                                </li>
                                                        <li><a href="/">
                                                                <FaUsers />
                                                                درباره ما</a>
                                                                </li>
                                                        <li><a href="/">
                                                                <MdOutlinePhonelinkRing />
                                                                تماس با ما</a>
                                                                </li>
                                                </ul>
                                       </nav>

                                       <nav className={styles.menuWrapperUl2}>
                                               <ul>
                                                       <li><Link to="/SignUp">
                                                               <FaUserPlus />
                                                               ثبت نام</Link></li>
                                                       <li>
                                                       <a href="/">
                                                               <HiOutlineLogin />
                                                               ورود</a></li>
                                               </ul>
                                       </nav>
                                </menu>
                             </section>
                        </header>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis nulla quibusdam quas? Voluptate culpa ex, officiis quaerat cupiditate nulla quis quam quibusdam animi rem ratione ea consequatur necessitatibus ducimus.
                      In dolor autem sit. Temporibus laborum provident, cupiditate iure explicabo velit aliquam assumenda distinctio facilis amet doloribus? Dolorum adipisci, explicabo corrupti obcaecati, sequi accusantium dignissimos eum quis nisi, est iste.
                      Quas voluptas facilis nulla ratione inventore nobis blanditiis placeat nesciunt amet nisi aliquam vitae fugiat doloremque eligendi laboriosam vero animi officiis expedita neque, architecto nam autem modi aspernatur eos. Porro.
                      Nisi, magnam non. Repudiandae sequi error ducimus, repellendus magnam quas laudantium porro rerum eligendi suscipit nemo hic, tenetur perspiciatis similique commodi exercitationem tempore adipisci maxime ab facere aspernatur neque! Ipsam.
                      Quam dolor explicabo dolorem. Explicabo alias officia porro eos odit labore eum vero quisquam assumenda id architecto error totam, quibusdam incidunt veniam quae rem dignissimos necessitatibus! Nihil facilis necessitatibus eveniet?
                      Libero ex praesentium natus, quis tempore et ullam quisquam quod aperiam, dignissimos at sunt ipsa nesciunt accusamus fugit aspernatur sed vel id laborum commodi numquam animi iusto. Libero, rem tenetur.
                      Facere ratione nihil, unde, dicta quisquam dolore labore perferendis eligendi molestiae iure deleniti error in laudantium nemo amet fugiat hic sunt dolor, accusantium aspernatur ad fugit necessitatibus praesentium? Sunt, maiores!
                      Dolor earum similique ut sapiente nemo nisi doloremque itaque delectus maxime corporis quam possimus consectetur asperiores sunt incidunt, vitae fuga vel facere. Earum officiis possimus sed perspiciatis placeat. Ad, reiciendis!
                      Eum sed ipsam voluptas non neque. Libero, omnis dolor ipsum magni placeat nihil voluptatem mollitia aperiam molestias veritatis perspiciatis ab, voluptate temporibus alias. Enim, odio tenetur. Accusamus enim dolores eveniet!
                      Cumque earum at eum quibusdam debitis dolorem! Vero eligendi adipisci molestiae accusantium consectetur doloremque assumenda unde architecto! Fugiat doloremque sint iste! Enim dolore numquam obcaecati, laboriosam porro dicta corporis amet?
                      Consequuntur reiciendis eos quo odit a maxime, pariatur, illo quod accusantium quibusdam provident in eligendi odio sunt ipsa alias possimus neque magnam blanditiis vero sapiente unde recusandae. Ducimus, soluta natus?
                      Dolore commodi cumque libero fugiat quis! Earum voluptatem quisquam minima delectus sequi explicabo, sint velit dolor officiis labore nihil ipsa similique consequatur, in dolores dicta perferendis. Rem officia quibusdam vel.
                      Corrupti itaque ad pariatur odio voluptatum quasi inventore libero, odit ea omnis explicabo, perspiciatis dolorum! Distinctio illum odit, nisi rerum fugiat sapiente voluptates ratione ipsam. Atque eos doloribus ea inventore?
                      Assumenda quaerat beatae fugiat obcaecati, earum et deleniti! Accusantium, obcaecati maiores. Tempora autem libero dolorem sed aspernatur beatae iure vel cupiditate odio! Odit magni odio soluta enim non culpa doloremque.
                      Sint reprehenderit nisi vel nemo eveniet, unde facere sequi at quos! Porro, facere. Eligendi, numquam ad enim aperiam nostrum alias ipsam beatae voluptates iure debitis natus odio, adipisci voluptas culpa?
                      Id debitis aperiam quibusdam. A consectetur optio id soluta est perspiciatis voluptas eius alias neque dolorum, commodi pariatur eum? Nisi eveniet laudantium omnis laborum vel vero, nesciunt minima aliquid! Repellat!
                      Amet itaque commodi laborum deleniti nihil totam accusamus hic atque nesciunt error odit repudiandae, dolores nam ea architecto nulla quas enim est dolor. Provident nobis, earum quaerat reprehenderit consequuntur id.
                      Sit sed quia, maxime quam sunt incidunt quaerat hic aut natus, et nostrum labore quidem voluptatum amet harum vitae autem illo, accusantium est laborum illum accusamus nemo. Eaque, iure non?
                      Atque nulla dolor animi? Error dolor alias officiis tenetur excepturi delectus nobis ipsam ab suscipit distinctio sapiente similique, harum est inventore laboriosam velit adipisci quisquam incidunt, tempora quos ducimus id.
                      Inventore impedit facilis molestiae odio rem. Neque a unde asperiores soluta dolor minus id eveniet sint eum molestias mollitia nemo cupiditate quis voluptatibus obcaecati, eligendi iure velit ea iusto consequuntur?
                      Aperiam autem facere debitis dolores sunt eligendi quis ea, est rerum aliquam neque labore sit perspiciatis nam amet nemo! Atque voluptate magni libero sequi sit ab dolores nam est perferendis.
                      Non cumque enim, aperiam fugit aspernatur natus vel rerum iste eius illo autem ipsam consequuntur ea sequi ullam neque impedit beatae maxime illum nam veniam soluta harum. Consequatur, sequi aperiam!
                      Veniam maiores et quod natus qui sequi eum inventore necessitatibus, nostrum repellat architecto debitis quibusdam vel deserunt omnis minus, officia labore modi nulla nisi. Minus officia explicabo tempore itaque ipsa?
                      Assumenda debitis non modi consequatur molestias adipisci magni veniam culpa, repudiandae animi placeat consequuntur ea iste ipsa inventore amet ipsam reprehenderit doloremque atque dolor delectus. Autem omnis eveniet exercitationem corrupti?
                      Molestiae quae, numquam, quidem excepturi harum velit ipsum hic fugit nisi cum eos, itaque ab libero corrupti sint alias. Quisquam, voluptatem blanditiis veritatis voluptatum cum quaerat iure repudiandae rerum tenetur.
                      Excepturi quo est mollitia nulla. A incidunt maxime atque voluptatum illum ex. Corporis sapiente dolores voluptatibus neque voluptatum ad eos atque nulla ut? Eum totam ullam dignissimos! Amet, quaerat rerum?
                      Consequuntur iste dolores ab accusamus, ratione aperiam perferendis incidunt, deleniti recusandae nobis amet consequatur expedita, ipsa minima voluptatum neque autem ipsum in! Ratione officia nesciunt exercitationem odit omnis mollitia repellendus.
                      Similique, quis nisi adipisci magnam id quo? Nulla, sit voluptate. Eos sint unde ex esse ullam nobis, corporis necessitatibus blanditiis tenetur beatae corrupti laboriosam. Nesciunt facilis iste blanditiis mollitia nostrum!
                      Placeat dolore aut perspiciatis ipsam, ducimus ad eius, harum sapiente totam odit tenetur velit atque animi labore doloremque obcaecati voluptatem! Facilis voluptates error ipsam minima veniam quos rem cum incidunt?
                      Recusandae beatae ut facilis quos ratione officiis culpa nulla iste facere libero, suscipit architecto. Repellendus nesciunt optio ut dignissimos facere omnis praesentium, asperiores earum dicta reiciendis explicabo sed neque quos!
                      Beatae, aut dolores nulla illo dolorem hic fuga. Nostrum, illum doloremque aspernatur obcaecati aut architecto eligendi qui natus sunt, accusantium reiciendis enim quis laudantium corporis modi quasi aliquam ex dignissimos!
                      Repudiandae odio dolores magni quod quasi modi aspernatur aperiam exercitationem suscipit ad facilis facere nulla iure dolor mollitia perspiciatis reprehenderit vero distinctio commodi, vel illo dolorum minima. Temporibus, voluptate magni?
                      Ipsa quaerat impedit reprehenderit expedita quia dolore officiis delectus suscipit, doloribus eos, nam a harum magnam est atque at qui vel pariatur. Recusandae expedita eaque quas quos in, velit consequuntur.
                      Saepe incidunt enim blanditiis voluptates corporis magnam nobis odio dolores aliquam veritatis tempora esse, totam maiores a explicabo perferendis. Dolorem fuga illum totam sed veniam voluptas esse debitis. Expedita, impedit!
                      Animi voluptatum mollitia corrupti veniam distinctio magnam exercitationem incidunt natus repudiandae vitae nulla quasi totam obcaecati illo quae excepturi, dolorem dolorum quo dolore inventore maxime? Sed numquam ad libero repudiandae?
                      Nam vel eligendi delectus aspernatur architecto repellat quibusdam voluptates qui exercitationem quisquam? Obcaecati quam culpa corrupti temporibus quia officia assumenda fugit cupiditate. Magni et dicta iste quaerat, repudiandae totam modi.
                      Quidem voluptatem nobis architecto, molestiae nostrum natus soluta accusantium adipisci! Iste maiores voluptates quae voluptate dolorem non perspiciatis ducimus ab, hic voluptas aperiam amet delectus incidunt deleniti, neque ad consequuntur.
                      Molestias sed perspiciatis consequatur voluptate, aperiam eius modi enim commodi eveniet autem explicabo a quasi? Molestias asperiores consequuntur ipsam eligendi nemo sed sapiente tempora suscipit voluptates, exercitationem, delectus maxime optio.
                      Necessitatibus quisquam dicta voluptatibus aliquam, commodi eligendi aspernatur saepe asperiores tempore veniam voluptas ratione animi qui voluptatum accusantium quibusdam minus placeat. Odio cum esse ut obcaecati est eveniet unde deserunt!
                      Voluptatum consequuntur unde adipisci qui omnis esse voluptatibus vitae maxime? Laboriosam quis temporibus aliquam cum sed repellat quas omnis asperiores, modi nostrum ullam rem quos ipsam ut numquam, quibusdam dicta?
                      Minus cum rerum itaque explicabo quia sit neque eveniet corrupti ullam asperiores, quisquam officiis, expedita nisi atque quasi cumque natus totam consectetur. Exercitationem saepe aspernatur quasi aperiam nulla quam aliquam?
                      Quae, qui! Inventore odit id adipisci ullam repellat facere fuga quaerat temporibus voluptatem ipsam ut vitae porro, tempore veniam laudantium praesentium recusandae sunt totam? Amet fugiat quam obcaecati a nihil?
                      Accusantium debitis esse non quo aut doloremque in deserunt dolor tempora minus vel ipsum eius pariatur alias quod magnam velit, minima molestias veritatis tenetur nesciunt? Quibusdam odit corrupti numquam voluptatibus!
                      Possimus aspernatur iste dolor doloribus veritatis ipsum facilis excepturi cumque quos fugit eius rem molestias quis blanditiis sint distinctio repellat in pariatur assumenda, nesciunt modi voluptate dignissimos. Aperiam, consequuntur cum?
                      Maxime molestias, reiciendis eaque eum suscipit officia ducimus iure enim totam praesentium earum minima sunt blanditiis libero eveniet facilis nesciunt laborum porro? Dignissimos voluptates, enim soluta beatae alias dolorum dicta?
                      Quidem, quas mollitia deleniti sapiente illo tempora modi dicta expedita autem accusamus commodi similique ipsa odit dolore ipsum iure placeat minus debitis nostrum. Culpa voluptate quae quaerat ad aspernatur consectetur!
                      Perspiciatis nulla, doloremque quia ut est, optio voluptate maiores dolorum dignissimos, similique impedit magnam temporibus. Vel qui illum natus ratione laudantium. Adipisci in soluta laborum quae maxime repudiandae natus eum.
                      Molestias, delectus? Consequatur assumenda est ut. Consequatur, tempore doloremque. Odio quae blanditiis possimus dolorem provident saepe, hic sunt sed ex vitae cupiditate ratione, harum odit necessitatibus. Veniam perspiciatis ea molestiae.
                      Minus, eos commodi? Hic eveniet, quam vero culpa aspernatur eaque odit. Facere harum, ex eos obcaecati aliquid pariatur est sed tenetur ut dolorum tempore eum labore quae quidem placeat cum!
                      Eum inventore delectus consequuntur minima autem aliquam corporis ullam, fugit nobis adipisci pariatur laudantium expedita earum sunt fugiat, ipsum blanditiis nemo magnam et consectetur unde at officiis hic. Dolor, recusandae!
                </div>
        );
};

export default Header;
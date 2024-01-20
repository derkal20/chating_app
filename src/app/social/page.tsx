// Import React and styles
'use client';
import React, { useState } from 'react';
import './styles/global.css';
import styles from './styles/style.module.css'; // Replace with the correct path to your styles

// Define a component
const YourComponent: React.FC = () => {
    const [userSettingsVisible, setUserSettingsVisible] = useState(false);
    
    const handleUserSettingToggle = () => {
        console.log(userSettingsVisible);
        
        setUserSettingsVisible(!userSettingsVisible);
    };
    return (
        <>
            <nav className={styles.navbar}>
            {/* <nav classN/ame="navbar"> */}
                <div className={styles.navLeft}>
                    <img className={styles.logo} src="/images/social/logo.png" alt="" />
                    <ul className={styles.navlogo}>
                        <li><img src="/images/social/notification.png" alt="" /></li>
                        <li><img src="/images/social/inbox.png" alt="" /></li>
                        <li><img src="/images/social/video.png" alt="" /></li>
                    </ul>
                </div>
                <div className={styles.navRight}>
                    <div className={styles['search-box']}>
                        <img src="/images/social/search.png" alt="" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className={styles['profile-image']} onClick={handleUserSettingToggle}>
                        <img src="/images/social/profile-pic.png" alt="" />
                    </div>
                </div>
                user-setting-showup-toggle
                {userSettingsVisible && (
                    <div className={styles['user-settings']}>
                        <div className={styles['profile-darkButton']}>
                            <div className={styles['user-profile']}>
                                <img src="/images/social/profile-pic.png" alt="" />
                                <div>
                                    <p> Alex Carry</p>
                                    <a href="#">See your profile</a>
                                </div>
                            </div>
                            <div id="dark-button" >
                                <span></span>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['user-profile']}>
                            <img src="/images/social/feedback.png" alt="" />
                            <div>
                                <p> Give Feedback</p>
                                <a href="#">Help us to improve</a>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['settings-links']}>
                            <img src="/images/social/setting.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Settings & Privary <img src="/images/social/arrow.png" alt="" /></a>
                        </div>

                        <div className={styles['settings-links']}>
                            <img src="/images/social/help.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Help & Support <img src="/images/social/arrow.png" alt="" /></a>
                        </div>

                        <div className={styles['settings-links']}>
                            <img src="/images/social/Display.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Display & Accessibility <img src="/images/social/arrow.png" alt="" /></a>
                        </div>

                        <div className={styles['settings-links']}>
                            <img src="/images/social/logout.png" alt="" className={styles['settings-icon']} />
                            <a href="#">Logout <img src="/images/social/arrow.png" alt="" /></a>
                        </div>

                    </div>
                )}

                {/* ... user-settings component ... */}
            </nav>

            {/* Content Area */}
            <div className={styles.container}>
                <div className={styles['left-sidebar']}>
                    <div className={styles['important-links']}>
                        <a href="#"><img src="/images/social/news.png" alt="" />Latest News</a>
                        <a href="#"><img src="/images/social/friends.png" alt="" />Friends</a>
                        <a href="#"><img src="/images/social/group.png" alt="" />Groups</a>
                        <a href="#"><img src="/images/social/marketplace.png" alt="" />marketplace</a>
                        <a href="#"><img src="/images/social/watch.png" alt="" />Watch</a>
                        <a href="#">See More</a>
                    </div>

                    <div className={styles['shortcut-links']}>
                        <p>Your Shortcuts</p>
                        <a href="#"> <img src="/images/social/shortcut-1.png" alt="" />Web Developers</a>
                        <a href="#"> <img src="/images/social/shortcut-2.png" alt="" />Web Design Course</a>
                        <a href="#"> <img src="/images/social/shortcut-3.png" alt="" />Full Stack Development</a>
                        <a href="#"> <img src="/images/social/shortcut-4.png" alt="" />Website Experts</a>
                    </div>
                </div>


                <div className={styles['content-area']}>
                    <div className={styles['story-gallery']}>
                        <div
                            // style={{background:'url("/images/social/status-1.png")'}}
                            className={styles['story-story1']}>
                            <img src="/images/social/upload.png" alt="" />
                            <p className={styles['story-p']}>Post Story</p>
                        </div>
                        {/* <div className={styles['story story2']}>
                            <img src="/images/social/member-1.png" alt="" />
                            <p>Alison</p>
                        </div>
                        <div className={styles['story story3']}>
                            <img src="/images/social/member-2.png" alt="" />
                            <p>Jackson</p>
                        </div>
                        <div className={styles['story story4']}>
                            <img src="/images/social/member-3.png" alt="" />
                            <p>Samona</p>
                        </div>
                        <div className={styles['story story5']}>
                            <img src="/images/social/member-4.png" alt="" />
                            <p>John</p>
                        </div> */}
                    </div>

                    <div className={styles['write-post-container']}>
                        <div className={styles['user-profile']}>
                            <img src="/images/social/profile-pic.png" alt="" />
                            <div>
                                <p> Alex Carry</p>
                                <small>Public <i className={styles['fas fa-caret-down']}></i></small>
                            </div>
                        </div>

                        <div className={styles['post-upload-textarea']}>
                            <textarea name="" placeholder="What's on your mind, Alex?" id="" cols={30} rows={3}></textarea>
                            <div className={styles['add-post-links']}>
                                <a href="#"><img src="/images/social/live-video.png" alt="" />Live Video</a>
                                <a href="#"><img src="/images/social/photo.png" alt="" />Photo/Video</a>
                                <a href="#"><img src="/images/social/feeling.png" alt="" />Feeling Activity</a>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                        <div className={styles['user-profile-box']}>
                            <div className={styles['user-profile']}>
                                <img src="/images/social/profile-pic.png" alt="" />
                                <div>
                                    <p> Alex Carry</p>
                                    <small>August 13 1999, 09.18 pm</small>
                                </div>
                            </div>
                            <div>
                                <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                            </div>
                        </div>
                        <div className={styles['status-field']}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                    href="#">#This_Post_is_Better!!!!</a> </p>
                            <img src="/images/social/feed-image-1.png" alt="" />

                        </div>
                        <div className={styles['post-reaction']}>
                            <div className={styles['activity-icons']}>
                                <div><img src="/images/social/like-blue.png" alt="" />120</div>
                                <div><img src="/images/social/comments.png" alt="" />52</div>
                                <div><img src="/images/social/share.png" alt="" />35</div>
                            </div>
                            <div className={styles['post-profile-picture']}>
                                <img src="/images/social/profile-pic.png " alt="" /> <i className={styles[' fas fa-caret-down']}></i>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                        <div className={styles['user-profile-box']}>
                            <div className={styles['user-profile']}>
                                <img src="/images/social/profile-pic.png" alt="" />
                                <div>
                                    <p> Alex Carry</p>
                                    <small>August 13 1999, 09.18 pm</small>
                                </div>
                            </div>
                            <div>
                                <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                            </div>
                        </div>
                        <div className={styles['status-field']}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                    href="#">#This_Post_is_Bigger!!!!</a> </p>
                            <img src="/images/social/feed-image-2.png" alt="" />

                        </div>
                        <div className={styles['post-reaction']}>
                            <div className={styles['activity-icons']}>
                                <div><img src="/images/social/like-blue.png" alt="" />120</div>
                                <div><img src="/images/social/comments.png" alt="" />52</div>
                                <div><img src="/images/social/share.png" alt="" />35</div>
                            </div>
                            <div className={styles['post-profile-picture']}>
                                <img src="/images/social/profile-pic.png " alt="" /> <i className={styles[' fas fa-caret-down']}></i>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                        <div className={styles['user-profile']}>
                            <img src="/images/social/profile-pic.png" alt="" />
                            <div>
                                <p> Alex Carry</p>
                                <small>August 13 1999, 09.18 pm</small>
                            </div>
                        </div>
                        <div>
                            <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                        </div>
                        <div className={styles['status-field']}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                    href="#">#This_Post_is_faster!!!!</a> </p>
                            <img src="/images/social/feed-image-3.png" alt="" />

                        </div>
                        <div className={styles['post-reaction']}>
                            <div className={styles['activity-icons']}>
                                <div><img src="/images/social/like-blue.png" alt="" />120</div>
                                <div><img src="/images/social/comments.png" alt="" />52</div>
                                <div><img src="/images/social/share.png" alt="" />35</div>
                            </div>
                            <div className={styles['post-profile-picture']}>
                                <img src="/images/social/profile-pic.png " alt="" /> <i className={styles[' fas fa-caret-down']}></i>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['status-field-container']} ${styles['write-post-container']}`}>
                        <div className={styles['user-profile-box']}>
                            <div className={styles['user-profile']}>
                                <img src="/images/social/profile-pic.png" alt="" />
                                <div>
                                    <p> Alex Carry</p>
                                    <small>August 13 1999, 09.18 pm</small>
                                </div>
                            </div>
                            <div>
                                <a href="#"><i className={styles['fas fa-ellipsis-v']}></i></a>
                            </div>
                        </div>
                        <div className={styles['status-field']}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
                                laborum nihil accusantium odit laboriosam, sed sit autem! <a
                                    href="#">#This_Post_is_perfect!!!!</a> </p>
                            <img src="/images/social/feed-image-4.png" alt="" />

                        </div>
                        <div className={styles['post-reaction']}>
                            <div className={styles['activity-icons']}>
                                <div><img src="/images/social/like-blue.png" alt="" />120</div>
                                <div><img src="/images/social/comments.png" alt="" />52</div>
                                <div><img src="/images/social/share.png" alt="" />35</div>
                            </div>
                            <div className={styles['post-profile-picture']}>
                                <img src="/images/social/profile-pic.png " alt="" /> <i className={styles[' fas fa-caret-down']}></i>
                            </div>
                        </div>
                    </div>
                    <button type="button" className={styles['btn-LoadMore" onclick="LoadMoreToggle()']}>Load More</button>
                </div>

                <div className={styles['right-sidebar']}>
                    <div className={styles['heading-link']}>
                        <h4>Events</h4>
                        <a href="">See All</a>
                    </div>

                    <div className={styles['events']}>
                        <div className={styles['left-event']}>
                            <h4>13</h4>
                            <span>august</span>
                        </div>
                        <div className={styles['right-event']}>
                            <h4>Social Media</h4>
                            <p> <i className={styles['fas fa-map-marker-alt']}></i> wisdom em Park</p>
                            <a href="#">More Info</a>
                        </div>
                    </div>
                    <div className={styles['events']}>
                        <div className={styles['left-event']}>
                            <h4>18</h4>
                            <span>January</span>
                        </div>
                        <div className={styles['right-event']}>
                            <h4>Mobile Marketing</h4>
                            <p><i className={styles['fas fa-map-marker-alt']}></i> wisdom em Park</p>
                            <a href="#">More Info</a>
                        </div>
                    </div>

                    <div className={styles['heading-link']}>
                        <h4>Advertisement</h4>
                        <a href="">Close</a>
                    </div>
                    <div className={styles['advertisement']}>
                        <img src="/images/social/advertisement.png" className={styles['advertisement-image']} alt="" />
                    </div>

                    <div className={styles['heading-link']}>
                        <h4>Conversation</h4>
                        <a href="">Hide Chat</a>
                    </div>

                    <div className={styles['online-list']}>
                        <div className={styles['online']}>
                            <img src="/images/social/member-1.png" alt="" />
                        </div>
                        <p>Alison Mina</p>
                    </div>

                    <div className={styles['online-list']}>
                        <div className={styles['online']}>
                            <img src="/images/social/member-2.png" alt="" />
                        </div>
                        <p>Jackson Aston</p>
                    </div>
                    <div className={styles['online-list']}>
                        <div className={styles['online']}>
                            <img src="/images/social/member-3.png" alt="" />
                        </div>
                        <p>Samona Rose</p>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <p>&copy; Copyright 2023 - Socialbook All Rights Reserved</p>
            </footer>
        </>
    );
};

export default YourComponent;

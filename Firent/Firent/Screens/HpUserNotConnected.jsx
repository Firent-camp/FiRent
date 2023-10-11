import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Svg, Path, Circle, Rect } from 'react-native-svg';

export default function Homepage() {
    return (
        <View style={styles.homepage}>
            <Text style={styles.location}>
                {`Location`}
            </Text>
            <Text style={styles.seeAll}>
                {`See All`}
            </Text>
            <Text style={styles._seeAll}>
                {`See All`}
            </Text>
            <Text style={styles.categories}>
                {`Categories`}
            </Text>
            <Text style={styles.topTrips}>
                {`Top Trips`} 
            </Text>
            <Text style={styles.groupTrips}>
                {`Group Trips`}
            </Text>
            <View style={styles.group34}>
                <Text style={styles.newYorkUSA}>
                    {`New York, USA`}
                </Text>
                <Svg style={styles.vector} width="12" height="15" viewBox="0 0 12 15" fill="none" >
                    <Path d="M5.96178 7.45223C6.37166 7.45223 6.72266 7.30617 7.01478 7.01404C7.30641 6.72241 7.45223 6.37166 7.45223 5.96178C7.45223 5.55191 7.30641 5.20091 7.01478 4.90878C6.72266 4.61715 6.37166 4.47134 5.96178 4.47134C5.55191 4.47134 5.20116 4.61715 4.90953 4.90878C4.6174 5.20091 4.47134 5.55191 4.47134 5.96178C4.47134 6.37166 4.6174 6.72241 4.90953 7.01404C5.20116 7.30617 5.55191 7.45223 5.96178 7.45223ZM5.96178 14.625C5.86242 14.625 5.76306 14.6064 5.66369 14.5691C5.56433 14.5318 5.47739 14.4822 5.40287 14.4201C3.58949 12.8178 2.23567 11.3306 1.3414 9.95841C0.447134 8.58571 0 7.30318 0 6.11083C0 4.24777 0.599408 2.76354 1.79822 1.65812C2.99654 0.552707 4.3844 0 5.96178 0C7.53917 0 8.92703 0.552707 10.1253 1.65812C11.3242 2.76354 11.9236 4.24777 11.9236 6.11083C11.9236 7.30318 11.4764 8.58571 10.5822 9.95841C9.6879 11.3306 8.33408 12.8178 6.5207 14.4201C6.44618 14.4822 6.35924 14.5318 6.25987 14.5691C6.16051 14.6064 6.06115 14.625 5.96178 14.625Z" fill="white" />
                </Svg>

            </View>
            <View style={styles.group3488}>
                <View style={styles.group22}>
                    <View style={styles.rectangle4} />
                    <Text style={styles.lakes}>
                        {`Lakes`}
                    </Text>
                </View>
            </View>
            <View style={styles.group3489}>
                <View style={styles._group22}>
                    <View style={styles._rectangle4} />
                    <Text style={styles.sea}>
                        {`Sea`}
                    </Text>
                </View>
            </View>
            <View style={styles.group3490}>
                <View style={styles.__group22}>
                    <View style={styles.__rectangle4} />
                    <Text style={styles.mountain}>
                        {`Mountain`}
                    </Text>
                </View>
            </View>
            <View style={styles.group3491}>
                <View style={styles.___group22}>
                    <View style={styles.___rectangle4} />
                    <Text style={styles.forest}>
                        {`Forest`}
                    </Text>
                </View>
            </View>
            <View style={styles.group32}>
                <View style={styles.rectangle9} />
                <Text style={styles.norway}>
                    {`Norway`}
                </Text>
                <Text style={styles.seelisburg}>
                    {`Seelisburg`}
                </Text>
                <Svg style={styles._vector} width="9" height="12" viewBox="0 0 9 12" fill="none" >
                    <Path d="M4.55414 5.70945C4.85535 5.70945 5.11329 5.59754 5.32796 5.37373C5.54227 5.1503 5.64943 4.88158 5.64943 4.56756C5.64943 4.25354 5.54227 3.98462 5.32796 3.76081C5.11329 3.53738 4.85535 3.42567 4.55414 3.42567C4.25294 3.42567 3.99519 3.53738 3.78088 3.76081C3.5662 3.98462 3.45886 4.25354 3.45886 4.56756C3.45886 4.88158 3.5662 5.1503 3.78088 5.37373C3.99519 5.59754 4.25294 5.70945 4.55414 5.70945ZM4.55414 11.2048C4.48113 11.2048 4.40811 11.1905 4.33509 11.162C4.26207 11.1334 4.19818 11.0954 4.14341 11.0478C2.81082 9.82025 1.81594 8.68083 1.15877 7.62953C0.501604 6.57785 0.173019 5.59526 0.173019 4.68175C0.173019 3.25438 0.613505 2.11725 1.49448 1.27035C2.37508 0.42345 3.39497 0 4.55414 0C5.71332 0 6.73321 0.42345 7.61381 1.27035C8.49478 2.11725 8.93527 3.25438 8.93527 4.68175C8.93527 5.59526 8.60669 6.57785 7.94952 7.62953C7.29235 8.68083 6.29747 9.82025 4.96488 11.0478C4.91011 11.0954 4.84622 11.1334 4.7732 11.162C4.70018 11.1905 4.62716 11.2048 4.55414 11.2048Z" fill="#636363" />
                </Svg>

                <ImageBackground style={styles.rectangle8} source={{ uri: /* dummy image */ 'https://dummyimage.com/141x126/000/fff.jpg' }} />
                <Text style={styles.mountainTrip}>
                    {`Mountain Trip`}
                </Text>
            </View>
            <View style={styles.group3492}>
                <View style={styles._rectangle9} />
                <Text style={styles._norway}>
                    {`Norway`}
                </Text>
                <Text style={styles._seelisburg}>
                    {`Seelisburg`}
                </Text>
                <Svg style={styles.__vector} width="9" height="12" viewBox="0 0 9 12" fill="none" >
                    <Path d="M4.55414 5.70945C4.85535 5.70945 5.11329 5.59754 5.32796 5.37373C5.54227 5.1503 5.64943 4.88158 5.64943 4.56756C5.64943 4.25354 5.54227 3.98462 5.32796 3.76081C5.11329 3.53738 4.85535 3.42567 4.55414 3.42567C4.25294 3.42567 3.99519 3.53738 3.78088 3.76081C3.5662 3.98462 3.45886 4.25354 3.45886 4.56756C3.45886 4.88158 3.5662 5.1503 3.78088 5.37373C3.99519 5.59754 4.25294 5.70945 4.55414 5.70945ZM4.55414 11.2048C4.48113 11.2048 4.40811 11.1905 4.33509 11.162C4.26207 11.1334 4.19818 11.0954 4.14341 11.0478C2.81082 9.82025 1.81594 8.68083 1.15877 7.62953C0.501604 6.57785 0.173019 5.59526 0.173019 4.68175C0.173019 3.25438 0.613505 2.11725 1.49448 1.27035C2.37508 0.42345 3.39497 0 4.55414 0C5.71332 0 6.73321 0.42345 7.61381 1.27035C8.49478 2.11725 8.93527 3.25438 8.93527 4.68175C8.93527 5.59526 8.60669 6.57785 7.94952 7.62953C7.29235 8.68083 6.29747 9.82025 4.96488 11.0478C4.91011 11.0954 4.84622 11.1334 4.7732 11.162C4.70018 11.1905 4.62716 11.2048 4.55414 11.2048Z" fill="#636363" />
                </Svg>

                <ImageBackground style={styles._rectangle8} source={{ uri: /* dummy image */ 'https://dummyimage.com/141x126/000/fff.jpg' }} />
                <Text style={styles._mountainTrip}>
                    {`Mountain Trip`}
                </Text>
            </View>
            <Svg style={styles.___vector} width="10" height="7" viewBox="0 0 10 7" fill="none" >
                <Path d="M9.80211 1.3871L5.36939 6.82258C5.31662 6.8871 5.25945 6.93269 5.19789 6.95936C5.13632 6.98645 5.07036 7 5 7C4.92964 7 4.86368 6.98645 4.80211 6.95936C4.74055 6.93269 4.68338 6.8871 4.63061 6.82258L0.184697 1.3871C0.0615655 1.23656 0 1.04839 0 0.82258C0 0.596774 0.0659631 0.403226 0.197889 0.241935C0.329815 0.0806451 0.483729 0 0.659631 0C0.835532 0 0.989446 0.0806451 1.12137 0.241935L5 4.98387L8.87863 0.241935C9.00176 0.0913978 9.15339 0.0161285 9.33351 0.0161285C9.51398 0.0161285 9.67019 0.0967741 9.80211 0.258064C9.93404 0.419354 10 0.607527 10 0.82258C10 1.03763 9.93404 1.22581 9.80211 1.3871Z" fill="#686DCD" />
            </Svg>

            <View style={styles.group36}>
                <View style={styles.rectangle35} />
                <Text style={styles._9}>
                    {`4.9`}
                </Text>
                <Svg style={styles.star3} width="9" height="9" viewBox="0 0 9 9" fill="none" >
                    <Path d="M4.25462 1.27821C4.40967 0.8291 5.04483 0.829101 5.19988 1.27822L5.82538 3.09008C5.89497 3.29166 6.08476 3.42691 6.29801 3.42691H8.25459C8.74626 3.42691 8.94267 4.06212 8.53682 4.33964L7.0071 5.38567C6.82115 5.51283 6.74319 5.74863 6.8167 5.96157L7.41312 7.68918C7.57033 8.14456 7.05593 8.537 6.65826 8.26508L5.00948 7.13763C4.83932 7.02127 4.61519 7.02127 4.44502 7.13763L2.79624 8.26508C2.39857 8.537 1.88418 8.14456 2.04138 7.68918L2.6378 5.96157C2.71132 5.74863 2.63336 5.51283 2.4474 5.38567L0.917684 4.33964C0.51183 4.06212 0.708244 3.42691 1.19991 3.42691H3.15649C3.36975 3.42691 3.55953 3.29166 3.62912 3.09008L4.25462 1.27821Z" fill="#EBB513" />
                </Svg>

            </View>
            <View style={styles.group40}>
                <View style={styles._rectangle35} />
                <Text style={styles.__9}>
                    {`4.9`}
                </Text>
                <Svg style={styles._star3} width="9" height="9" viewBox="0 0 9 9" fill="none" >
                    <Path d="M4.25463 1.27821C4.40968 0.8291 5.04484 0.829101 5.19989 1.27822L5.82539 3.09008C5.89498 3.29166 6.08477 3.42691 6.29802 3.42691H8.2546C8.74627 3.42691 8.94268 4.06212 8.53683 4.33964L7.00711 5.38567C6.82116 5.51283 6.7432 5.74863 6.81671 5.96157L7.41313 7.68918C7.57034 8.14456 7.05594 8.537 6.65827 8.26508L5.00949 7.13763C4.83932 7.02127 4.61519 7.02127 4.44503 7.13763L2.79625 8.26508C2.39858 8.537 1.88418 8.14456 2.04139 7.68918L2.63781 5.96157C2.71132 5.74863 2.63336 5.51283 2.44741 5.38567L0.917692 4.33964C0.511837 4.06212 0.708252 3.42691 1.19992 3.42691H3.1565C3.36975 3.42691 3.55954 3.29166 3.62913 3.09008L4.25463 1.27821Z" fill="#EBB513" />
                </Svg>

            </View>
            <View style={styles.frame29}>
                <Svg style={styles.group3471} width="22" height="22" viewBox="0 0 22 22" fill="none" >
                    <Path d="M11.0047 0C6.3165 0 2.31428 2.9368 0.733445 7.07143H2.43365C2.89484 6.06552 3.53592 5.13906 4.34143 4.33312C6.12134 2.55225 8.48776 1.57143 11.0047 1.57143C13.522 1.57143 15.8887 2.55225 17.6688 4.33317C19.449 6.11408 20.4293 8.48174 20.4293 11C20.4293 13.5185 19.449 15.8862 17.6689 17.667C15.8888 19.4479 13.5221 20.4286 11.0047 20.4286C8.48766 20.4286 6.12125 19.4479 4.34138 17.6671C3.53582 16.8611 2.89474 15.9346 2.43345 14.9286H0.733347C2.31413 19.0634 6.3164 22 11.0048 22C17.0771 22 22 17.0753 22 11C22 4.92535 17.0771 0 11.0047 0Z" fill="#AFAFAF" />
                    <Path d="M9.35031 13.475L10.5602 14.6667L15.4 9.9L10.5602 5.13333L9.35026 6.32502L12.1246 9.05737H0V10.7426H12.1246L9.35031 13.475Z" fill="#AFAFAF" />
                </Svg>

            </View>
            <View style={styles._frame29}>
                <View style={styles.frame6}>
                    {/* RN-Flow:: can be replaced with <IconlyLightSearch  /> */}
                    <View style={styles.iconlyLightSearch}>
                        <Svg style={styles.search} width="21" height="21" viewBox="0 0 21 21" fill="none" >
                            <Circle cx="9.7666" cy="9.76659" r="8.98856" stroke="#B9C1D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <Path d="M16.0183 16.4851L19.5423 20" stroke="#B9C1D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>

                    </View>
                    <Text style={styles._search}>
                        {`Search`}
                    </Text>
                </View>
                {/* RN-Flow:: can be replaced with <IconlyLightFilter  /> */}
                <View style={styles.iconlyLightFilter} />
            </View>
            <View style={styles.group3487}>
                <View style={styles.group27}>
                    <Svg style={styles.group25} width="150" height="212" viewBox="0 0 150 212" fill="none" >
                        <Rect width="150" height="212" rx="20" fill="#131316" />
                    </Svg>

                    <ImageBackground style={styles.rectangle7} source={{ uri: /* dummy image */ 'https://dummyimage.com/141x110.51063537597656/000/fff.jpg' }} />
                    <Text style={styles.redFishLake}>
                        {`RedFish Lake`}
                    </Text>
                    <Text style={styles.$40Visit}>
                        {`$40 `}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/`}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`Visit`}</Text>
                    </Text>
                    <Text style={styles.idaho}>
                        {`Idaho`}
                    </Text>
                    <Svg style={styles.____vector} width="10" height="13" viewBox="0 0 10 13" fill="none" >
                        <Path d="M4.99013 6.76738C5.29134 6.76738 5.54928 6.64634 5.76395 6.40426C5.97826 6.16259 6.08542 5.87193 6.08542 5.53228C6.08542 5.19262 5.97826 4.90176 5.76395 4.65967C5.54928 4.41801 5.29134 4.29717 4.99013 4.29717C4.68893 4.29717 4.43118 4.41801 4.21687 4.65967C4.00219 4.90176 3.89485 5.19262 3.89485 5.53228C3.89485 5.87193 4.00219 6.16259 4.21687 6.40426C4.43118 6.64634 4.68893 6.76738 4.99013 6.76738ZM4.99013 12.7113C4.91712 12.7113 4.8441 12.6959 4.77108 12.665C4.69806 12.6341 4.63417 12.593 4.5794 12.5415C3.24681 11.2138 2.25193 9.98133 1.59476 8.84421C0.937593 7.70668 0.609009 6.64387 0.609009 5.65579C0.609009 4.11191 1.04949 2.88195 1.93047 1.96591C2.81107 1.04988 3.83096 0.591858 4.99013 0.591858C6.14931 0.591858 7.1692 1.04988 8.0498 1.96591C8.93077 2.88195 9.37126 4.11191 9.37126 5.65579C9.37126 6.64387 9.04268 7.70668 8.38551 8.84421C7.72834 9.98133 6.73346 11.2138 5.40087 12.5415C5.3461 12.593 5.28221 12.6341 5.20919 12.665C5.13617 12.6959 5.06315 12.7113 4.99013 12.7113Z" fill="#575B66" />
                    </Svg>

                    <Svg style={styles._____vector} width="20" height="17" viewBox="0 0 20 17" fill="none" >
                        <Path d="M10 17L8.55 15.7771C3.4 11.4507 0 8.58801 0 5.09537C0 2.2327 2.42 0 5.5 0C7.24 0 8.91 0.750409 10 1.92698C11.09 0.750409 12.76 0 14.5 0C17.58 0 20 2.2327 20 5.09537C20 8.58801 16.6 11.4507 11.45 15.7771L10 17Z" fill="#686DCD" />
                    </Svg>

                </View>
                <View style={styles.group28}>
                    <Svg style={styles._group25} width="150" height="212" viewBox="0 0 150 212" fill="none" >
                        <Rect width="150" height="212" rx="20" fill="#131316" />
                    </Svg>

                    <ImageBackground style={styles._rectangle7} source={{ uri: /* dummy image */ 'https://dummyimage.com/141x110.51063537597656/000/fff.jpg' }} />
                    <Text style={styles.maligneLake}>
                        {`Maligne Lake`}
                    </Text>
                    <Text style={styles._$40Visit}>
                        {`$40 `}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/`}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`Visit`}</Text>
                    </Text>
                    <Text style={styles.canada}>
                        {`Canada`}
                    </Text>
                    <Svg style={styles.______vector} width="9" height="13" viewBox="0 0 9 13" fill="none" >
                        <Path d="M4.55416 6.76738C4.85536 6.76738 5.1133 6.64634 5.32798 6.40426C5.54229 6.16259 5.64944 5.87193 5.64944 5.53228C5.64944 5.19262 5.54229 4.90176 5.32798 4.65967C5.1133 4.41801 4.85536 4.29717 4.55416 4.29717C4.25296 4.29717 3.9952 4.41801 3.78089 4.65967C3.56622 4.90176 3.45888 5.19262 3.45888 5.53228C3.45888 5.87193 3.56622 6.16259 3.78089 6.40426C3.9952 6.64634 4.25296 6.76738 4.55416 6.76738ZM4.55416 12.7113C4.48114 12.7113 4.40812 12.6959 4.3351 12.665C4.26209 12.6341 4.19819 12.593 4.14343 12.5415C2.81084 11.2138 1.81596 9.98133 1.15879 8.84421C0.501619 7.70668 0.173035 6.64387 0.173035 5.65579C0.173035 4.11191 0.61352 2.88195 1.49449 1.96591C2.3751 1.04988 3.39499 0.591858 4.55416 0.591858C5.71333 0.591858 6.73322 1.04988 7.61383 1.96591C8.4948 2.88195 8.93529 4.11191 8.93529 5.65579C8.93529 6.64387 8.6067 7.70668 7.94953 8.84421C7.29236 9.98133 6.29748 11.2138 4.96489 12.5415C4.91013 12.593 4.84623 12.6341 4.77322 12.665C4.7002 12.6959 4.62718 12.7113 4.55416 12.7113Z" fill="#575B66" />
                    </Svg>

                    <Svg style={styles._______vector} width="20" height="17" viewBox="0 0 20 17" fill="none" >
                        <Path d="M8.87235 15.3949L8.87162 15.3943C6.28622 13.2223 4.18219 11.4515 2.71868 9.79277C1.25914 8.13849 0.5 6.66441 0.5 5.09537C0.5 2.5447 2.65886 0.5 5.5 0.5C7.10249 0.5 8.639 1.19361 9.63321 2.26678L10 2.6627L10.3668 2.26678C11.361 1.19361 12.8975 0.5 14.5 0.5C17.3411 0.5 19.5 2.5447 19.5 5.09537C19.5 6.66441 18.7409 8.13849 17.2813 9.79277C15.8178 11.4515 13.7138 13.2223 11.1284 15.3943L11.1276 15.3949L10 16.3459L8.87235 15.3949Z" stroke="#686DCD" />
                    </Svg>

                </View>
                <View style={styles.group3486}>
                    <Svg style={styles.__group25} width="40" height="212" viewBox="0 0 40 212" fill="none" >
                        <Rect width="150" height="212" rx="20" fill="#131316" />
                    </Svg>

                    <ImageBackground style={styles.__rectangle7} source={{ uri: /* dummy image */ 'https://dummyimage.com/141x110.51063537597656/000/fff.jpg' }} />
                    <Text style={styles._maligneLake}>
                        {`Maligne Lake`}
                    </Text>
                    <Text style={styles.__$40Visit}>
                        {`$40 `}<Text style={{ "fontSize": 12, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`/`}</Text><Text style={{ "fontSize": 10, "fontWeight": "400", "textAlign": "left", "letterSpacing": 0, "color": "rgba(255, 255, 255, 1)" }}>{`Visit`}</Text>
                    </Text>
                    <Text style={styles._canada}>
                        {`Canada`}
                    </Text>
                    <Svg style={styles.________vector} width="9" height="13" viewBox="0 0 9 13" fill="none" >
                        <Path d="M4.55416 6.76738C4.85536 6.76738 5.1133 6.64634 5.32798 6.40426C5.54229 6.16259 5.64944 5.87193 5.64944 5.53228C5.64944 5.19262 5.54229 4.90176 5.32798 4.65967C5.1133 4.41801 4.85536 4.29717 4.55416 4.29717C4.25296 4.29717 3.9952 4.41801 3.78089 4.65967C3.56622 4.90176 3.45888 5.19262 3.45888 5.53228C3.45888 5.87193 3.56622 6.16259 3.78089 6.40426C3.9952 6.64634 4.25296 6.76738 4.55416 6.76738ZM4.55416 12.7113C4.48114 12.7113 4.40812 12.6959 4.3351 12.665C4.26209 12.6341 4.19819 12.593 4.14343 12.5415C2.81084 11.2138 1.81596 9.98133 1.15879 8.84421C0.501619 7.70668 0.173035 6.64387 0.173035 5.65579C0.173035 4.11191 0.61352 2.88195 1.49449 1.96591C2.3751 1.04988 3.39499 0.591858 4.55416 0.591858C5.71333 0.591858 6.73322 1.04988 7.61383 1.96591C8.4948 2.88195 8.93529 4.11191 8.93529 5.65579C8.93529 6.64387 8.6067 7.70668 7.94953 8.84421C7.29236 9.98133 6.29748 11.2138 4.96489 12.5415C4.91013 12.593 4.84623 12.6341 4.77322 12.665C4.7002 12.6959 4.62718 12.7113 4.55416 12.7113Z" fill="#575B66" />
                    </Svg>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homepage: {
        flexShrink: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(31, 31, 41, 1)",
        alignItems: "center",
        rowGap: 0,
        borderWidth: 3,
        borderColor: "rgba(30, 30, 30, 1)",
    },
    location: {
        position: "absolute",
        flexShrink: 0,
        top: 59,
        left: 23,
        width: 75,
        height: 19,
        textAlign: "left",
        color: "rgba(87, 91, 102, 1)",
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0
    },
    seeAll: {
        position: "absolute",
        flexShrink: 0,
        top: 309,
        left: 319,
        width: 60,
        height: 20,
        textAlign: "left",
        color: "rgba(162, 162, 162, 1)",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0
    },
    _seeAll: {
        position: "absolute",
        flexShrink: 0,
        top: 590,
        left: 319,
        width: 60,
        height: 20,
        textAlign: "left",
        color: "rgba(162, 162, 162, 1)",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0
    },
    categories: {
        position: "absolute",
        flexShrink: 0,
        top: 199,
        left: 22,
        width: 93,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0
    },
    topTrips: {
        position: "absolute",
        flexShrink: 0,
        top: 308,
        left: 22,
        width: 93,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0
    },
    groupTrips: {
        position: "absolute",
        flexShrink: 0,
        top: 589,
        left: 23,
        width: 110,
        height: 25,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0
    },
    group34: {
        position: "absolute",
        flexShrink: 0,
        top: 85,
        height: 19,
        left: 23,
        width: 133
    },
    newYorkUSA: {
        position: "absolute",
        flexShrink: 0,
        left: 18,
        width: 150,
        height: 19,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0
    },
    vector: {
        top:5,
        position: "absolute",
        flexShrink: 0,
        width: 12,
        height: 15,
        overflow: "visible"
    },
    group3488: {
        position: "absolute",
        flexShrink: 0,
        top: 238,
        height: 40,
        left: 8,
        width: 87
    },
    group22: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        width: 87
    },
    rectangle4: {
        position: "absolute",
        flexShrink: 0,
        width: 87,
        height: 40,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderWidth: 0.8888888955116272,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 26.66666603088379
    },
    lakes: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        left: 26,
        width: 34,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    group3489: {
        position: "absolute",
        flexShrink: 0,
        top: 238,
        height: 40,
        left: 104,
        width: 87
    },
    _group22: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        width: 87
    },
    _rectangle4: {
        position: "absolute",
        flexShrink: 0,
        width: 87,
        height: 40,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderWidth: 0.8888888955116272,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 26.66666603088379
    },
    sea: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        left: 32,
        width: 22,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    group3490: {
        position: "absolute",
        flexShrink: 0,
        top: 238,
        height: 40,
        left: 200,
        width: 87
    },
    __group22: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        width: 87
    },
    __rectangle4: {
        position: "absolute",
        flexShrink: 0,
        width: 87,
        height: 40,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderWidth: 0.8888888955116272,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 26.66666603088379
    },
    mountain: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        left: 17,
        width: 53,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    group3491: {
        position: "absolute",
        flexShrink: 0,
        top: 238,
        height: 40,
        left: 296,
        width: 87
    },
    ___group22: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        width: 87
    },
    ___rectangle4: {
        position: "absolute",
        flexShrink: 0,
        width: 87,
        height: 40,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderWidth: 0.8888888955116272,
        borderColor: "rgba(104, 109, 205, 1)",
        borderRadius: 26.66666603088379
    },
    forest: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        left: 25,
        width: 36,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    group32: {
        position: "absolute",
        flexShrink: 0,
        top: 628,
        height: 133,
        left: 24,
        width: 342
    },
    rectangle9: {
        position: "absolute",
        flexShrink: 0,
        width: 342,
        height: 133,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderRadius: 20
    },
    norway: {
        position: "absolute",
        flexShrink: 0,
        top: 66,
        left: 168,
        width: 42,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    seelisburg: {
        position: "absolute",
        flexShrink: 0,
        top: 42,
        left: 156,
        width: 60,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    _vector: {
        position: "absolute",
        flexShrink: 0,
        top: 66,
        left: 156,
        width: 9,
        height: 11,
        overflow: "visible"
    },
    rectangle8: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 4,
        width: 141,
        height: 126,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 15
    },
    mountainTrip: {
        position: "absolute",
        flexShrink: 0,
        top: 15,
        left: 155,
        width: 100,
        height: 17,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: 0
    },
    group3492: {
        position: "absolute",
        flexShrink: 0,
        top: 628,
        height: 133,
        left: 24,
        width: 342
    },
    _rectangle9: {
        position: "absolute",
        flexShrink: 0,
        width: 342,
        height: 133,
        backgroundColor: "rgba(19, 19, 22, 1)",
        borderRadius: 20
    },
    _norway: {
        position: "absolute",
        flexShrink: 0,
        top: 66,
        left: 168,
        width: 42,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    _seelisburg: {
        position: "absolute",
        flexShrink: 0,
        top: 42,
        left: 156,
        width: 60,
        height: 14,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    __vector: {
        position: "absolute",
        flexShrink: 0,
        top: 66,
        left: 156,
        width: 9,
        height: 11,
        overflow: "visible"
    },
    _rectangle8: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        left: 4,
        width: 141,
        height: 126,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 15
    },
    _mountainTrip: {
        position: "absolute",
        flexShrink: 0,
        top: 15,
        left: 155,
        width: 100,
        height: 17,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: 0
    },
    ___vector: {
        position: "absolute",
        flexShrink: 0,
        top: 90,
        right: 221,
        bottom: 744,
        left: 162,
        overflow: "visible"
    },
    group36: {
        position: "absolute",
        flexShrink: 0,
        top: 470,
        height: 16,
        left: 134,
        width: 34
    },
    rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 34,
        height: 16,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    _9: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 4,
        width: 15,
        height: 10,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    star3: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 19,
        width: 11,
        height: 10,
        overflow: "visible"
    },
    group40: {
        position: "absolute",
        flexShrink: 0,
        top: 470,
        height: 16,
        left: 298,
        width: 34
    },
    _rectangle35: {
        position: "absolute",
        flexShrink: 0,
        width: 34,
        height: 16,
        backgroundColor: "rgba(31, 31, 41, 1)",
        borderRadius: 5
    },
    __9: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 4,
        width: 15,
        height: 10,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    _star3: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        left: 19,
        width: 11,
        height: 10,
        overflow: "visible"
    },
    frame29: {
        position: "absolute",
        flexShrink: 0,
        top: 66,
        left: 331,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: "rgba(185, 193, 217, 1)",
        borderRadius: 10
    },
    group3471: {
        flexShrink: 0,
        height: 22,
        width: 22
    },
    _frame29: {
        position: "absolute",
        flexShrink: 0,
        top: 128,
        left: 22,
        right: 23,
        backgroundColor: "rgba(19, 19, 22, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 218,
        padding: 12,
        borderRadius: 10
    },
    frame6: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8
    },
    iconlyLightSearch: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0
    },
    search: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        height: 19,
        left: 3,
        width: 19
    },
    _search: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(87, 91, 102, 1)",
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0
    },
    iconlyLightFilter: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0
    },
    group3487: {
        position: "absolute",
        flexShrink: 0,
        top: 347,
        height: 212,
        left: 22,
        width: 478
    },
    group27: {
        position: "absolute",
        flexShrink: 0,
        height: 212,
        width: 150
    },
    group25: {
        position: "absolute",
        flexShrink: 0,
        height: 212,
        width: 150
    },
    rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 111,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 20
    },
    redFishLake: {
        position: "absolute",
        flexShrink: 0,
        top: 123,
        left: 9,
        width: 84,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    $40Visit: {
        position: "absolute",
        flexShrink: 0,
        top: 186,
        left: 9,
        width: 51,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    idaho: {
        position: "absolute",
        flexShrink: 0,
        top: 154,
        left: 22,
        width: 30,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    ____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 154,
        left: 9,
        width: 9,
        height: 12,
        overflow: "visible"
    },
    _____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 186,
        left: 122,
        width: 20,
        height: 17,
        overflow: "visible"
    },
    group28: {
        position: "absolute",
        flexShrink: 0,
        height: 212,
        left: 164,
        width: 150
    },
    _group25: {
        position: "absolute",
        flexShrink: 0,
        height: 212,
        width: 150
    },
    _rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 111,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 20
    },
    maligneLake: {
        position: "absolute",
        flexShrink: 0,
        top: 123,
        left: 9,
        width: 84,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    _$40Visit: {
        position: "absolute",
        flexShrink: 0,
        top: 186,
        left: 9,
        width: 51,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    canada: {
        position: "absolute",
        flexShrink: 0,
        top: 154,
        left: 23,
        width: 40,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    ______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 154,
        left: 10,
        width: 9,
        height: 12,
        overflow: "visible"
    },
    _______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 186,
        left: 122,
        width: 20,
        height: 17,
        overflow: "visible"
    },
    group3486: {
        position: "absolute",
        flexShrink: 0,
        height: 212,
        left: 328,
        width: 150
    },
    __group25: {
        position: "absolute",
        flexShrink: 0,
        height: 212,
        width: 150
    },
    __rectangle7: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        left: 5,
        width: 141,
        height: 111,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 20
    },
    _maligneLake: {
        position: "absolute",
        flexShrink: 0,
        top: 123,
        left: 9,
        width: 84,
        height: 18,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 13,
        fontWeight: "600",
        letterSpacing: 0
    },
    __$40Visit: {
        position: "absolute",
        flexShrink: 0,
        top: 186,
        left: 9,
        width: 51,
        height: 17,
        textAlign: "left",
        color: "rgba(104, 109, 205, 1)",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0
    },
    _canada: {
        position: "absolute",
        flexShrink: 0,
        top: 154,
        left: 23,
        width: 40,
        height: 15,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 11,
        fontWeight: "400",
        letterSpacing: 0
    },
    ________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 154,
        left: 10,
        width: 9,
        height: 12,
        overflow: "visible"
    }
})
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(236,221,203);

  
  //천장 음영 중앙부
  fill(122,114,93)
  beginShape();
  vertex(300,0); //up left
  vertex(1000,0); //up right
  vertex(600, 180); //down right
  vertex(300, 132); //down left 
  endShape(CLOSE);
  
  fill(180,169,150)
  beginShape();
  vertex(730,0); //up left
  vertex(1000,0); //up right
  vertex(600, 180); //down right
  vertex(460, 152); //down left 
  endShape(CLOSE);
  
  
  
  //천장 배관 그림자 우측
  fill(128,125,111);
  beginShape();
  vertex(700,607); //up left
  vertex(1000, 209); //up right
  vertex(1000,187); //down right
  vertex(684,139); //up left 
  endShape(CLOSE);
  
  //천장 음영 중앙좌측
  fill(108,104,97);
  beginShape();
  vertex(300,0); //up left
  vertex(700, 0); //up right
  vertex(400,107); //down right
  vertex(300,139); //up left 
  endShape(CLOSE);
  
  fill(146,139,121);
  beginShape();
  vertex(200,0); //up left
  vertex(246, 0); //up right
  vertex(200,30); //down right
  vertex(200,45); //up left 
  endShape(CLOSE);
  
  fill(166,150,125);
  beginShape();
  vertex(0,0); //up left
  vertex(300, 29); //up right
  vertex(300,60); //down right
  vertex(100,200); //up left 
  endShape(CLOSE);
  
  //좌측 천장 배관 그림자
  fill(135,129,108);
  beginShape();
  vertex(0,0); //up left
  vertex(300, 29); //up right
  vertex(300,60); //down right
  vertex(150,45); //up left 
  endShape(CLOSE);
  
  
  
  //최우측 천장 음영
  fill(213,192,170);
  beginShape();
  vertex(900,30); //up left
  vertex(1000, 0); //up right
  vertex(1000,44); //down right
  vertex(900,35); //down left 
  endShape(CLOSE);
  
  //천장 벽 경계
  fill(121,116,100);
  beginShape();
  vertex(600,30); //up left
  vertex(1000, 70); //up right
  vertex(1000,75); //down right
  vertex(600,35); //down left 
  endShape(CLOSE);
  
  
  //벽-배관 구멍
  fill(26,24,28);
  beginShape();
  vertex(350,110); //up left
  vertex(720, 154); //up right
  vertex(720,180); //down right
  vertex(350,150); //down left 
  endShape(CLOSE);
  
  fill(199,182,165);
  beginShape();
  vertex(350,113); //up left
  vertex(720, 157); //up right
  vertex(720,163); //down right
  vertex(350,117); //down left 
  endShape(CLOSE);
   
  fill(251);
  beginShape();
  vertex(350,114); //up left
  vertex(720, 162); //up right
  vertex(720,163); //down right
  vertex(350,116); //down left 
  endShape(CLOSE);
  
  //우측 천장 배관가로 우측
  fill(189,176,166)
  beginShape();
  vertex(700,128); //up left
  vertex(1000, 160); //up right
  vertex(1000,180); //down right
  vertex(720,150); //down left 
  endShape(CLOSE);
  
  
  fill(185,168,151)
  beginShape();
  vertex(700,147); //up left
  vertex(1000, 179); //up right
  vertex(1000,187); //down right
  vertex(713,158); //down left 
  endShape(CLOSE);
  


  
  //천장 배관(-3) 세로
  fill(199,182,165);
  beginShape();
  vertex(310,169); //up left
  vertex(552,0); //up right
  vertex(512, 0); //down right
  vertex(285, 163); //down left 
  endShape(CLOSE);
  fill(67,63,61);
  beginShape();
  vertex(340,139); //downpright
  vertex(540,0); //up right
  vertex(560, 0); //down right
  vertex(320, 163); //down left 
  endShape(CLOSE);
  
  //천장 배관(-2) 세로
  fill(199,182,165);
  beginShape();
  vertex(500,169); //up left
  vertex(780,0); //up right
  vertex(700, 0); //down right
  vertex(425, 163); //down left 
  endShape(CLOSE);
  
  
  //천장 배관 최우측(-1) 세로
  fill(190,176,159);
  beginShape();
  vertex(690,170); //up left
  vertex(1000,0); //up right
  vertex(930, 0); //down right
  vertex(630, 164); //down left 
  endShape(CLOSE);
  
  
  //배경 - 벽; 약간 어두운 
  fill(208,195,183);
  beginShape();
  vertex(0, 100); //up left
  vertex(1000, 200); //up right
  vertex(1000, 1000); //down right
  vertex(0, 1000); //down left 
  endShape(CLOSE);
  
  //배경 - 좌측 밝은 벽
  fill(244,222,201);
  beginShape();
  vertex(0, 160); //up left
  vertex(200, 180); //up right
  vertex(200, 1000); //down right
  vertex(0, 900); //down left 
  endShape(CLOSE);
  
  
  //배경 -거울 뒤쪽 qur
  fill(230,210,193)
  beginShape();
  vertex(370, 200); //up left
  vertex(1000, 256); //up right
  vertex(1000, 1000); //down right
  vertex(370, 900); //down left 
  endShape(CLOSE);
  
  //배경-거울 뒤쪽 벽과 거울 사이 상단 좁은 천장
  fill(243,231,218)
  beginShape();
  vertex(370,200); //up left
  vertex(1000, 256); //up right
  vertex(1000, 290); //down right
  vertex(370, 240); //down left 
  endShape(CLOSE);
  fill(233,218,199);
  beginShape();
  vertex(370,200); //up left
  vertex(1000, 256); //up right
  vertex(1000, 265); //down right
  vertex(370, 210); //down left 
  endShape(CLOSE);
  
  
  //배경-좌측 거울
  fill(74,63,59)
  beginShape();
  vertex(0,200);
  vertex(100,200);
  vertex(100,700);
  vertex(0,705);
  endShape();
  
  
  //배경-우측 거울
  fill(255,255,255,90)
  ellipse(430,540,100,500)
  fill(255,255,255,90)
  ellipse(480,500,200,400)
  
  fill(137,115,75)
  beginShape();
  vertex(410,280); //up left
  vertex(1000, 323); //up right
  vertex(1000, 665); //down right
  vertex(410, 660); //down left 
  endShape(CLOSE);
  
  fill(185,152,107);
  beginShape();
  vertex(410,280); //up left
  vertex(800, 308); //up right
  vertex(750, 368); //down right
  vertex(410, 340); //down left 
  endShape(CLOSE);
  
  fill(102,85,64);
  beginShape();
  vertex(742,305); //up left
  vertex(800, 309); //up right
  vertex(750, 368); //down right
  vertex(742, 368); //down left 
  endShape(CLOSE);
  
  fill(102,85,64);
  beginShape();
  vertex(840,325); //up left
  vertex(1000, 336); //up right
  vertex(1000, 386); //down right
  vertex(794, 368); //down left 
  endShape(CLOSE);
  
  fill(93,95,78);
  beginShape();
  vertex(410,400); //up left
  vertex(1000, 443); //up right
  vertex(1000, 665); //down right
  vertex(410, 690); //down left 
  endShape(CLOSE);
  
  fill(217,192,165);
  beginShape();
  vertex(410,520); //up left
  vertex(1000, 560); //up right
  vertex(1000, 665); //down right
  vertex(410, 690); //down left 
  endShape(CLOSE);
  
  fill(186,169,145);
  beginShape();
  vertex(600,520); //up left
  vertex(1000, 460); //up right
  vertex(1000, 605); //down right
  vertex(610, 660); //down left 
  endShape(CLOSE);
  
  fill(11,9,11);
  beginShape();
  vertex(949,440); //up left
  vertex(1000, 442); //up right
  vertex(1000, 495); //down right
  vertex(710, 480); //down left 
  endShape(CLOSE);
  
  fill(111,109,91);
  beginShape();
  vertex(600,520); //up left
  vertex(1000, 460); //up right
  vertex(1000, 495); //down right
  vertex(610, 550); //down left 
  endShape(CLOSE);
  
  fill(179,161,136);
  beginShape();
  vertex(600,530); //up left
  vertex(1000, 470); //up right
  vertex(1000, 525); //down right
  vertex(610, 580); //down left 
  endShape(CLOSE);
  
  fill(232,239,237);
  beginShape();
  vertex(410,450); //up left
  vertex(800, 470); //up right
  vertex(800, 480); //down right
  vertex(410, 460); //down left 
  endShape(CLOSE);

  beginShape();
  vertex(410,500); //up left
  vertex(800, 470); //up right
  vertex(800, 480); //down right
  vertex(410, 510); //down left 
  endShape(CLOSE);
  
  fill(177,170,155)
  beginShape();
  vertex(410,450); //up left
  vertex(800, 470); //up right
  vertex(800, 473); //down right
  vertex(410, 453); //down left 
  endShape(CLOSE);

  beginShape();
  vertex(410,500); //up left
  vertex(800, 470); //up right
  vertex(800, 473); //down right
  vertex(410, 503); //down left 
  endShape(CLOSE);
  
  fill(251,96);
  beginShape();
  vertex(420,274); //up left
  vertex(1000, 317); //up right
  vertex(1000, 325); //down right
  vertex(410, 280); //down left 
  endShape(CLOSE);
  
  
  //거울-반사된 조명
  fill(239,241,228);
  ellipse(445,320,28, 20);
  ellipse(630,337,28, 20);
  ellipse(740,348,28, 20);
  
  fill(239,241,228,60);
  beginShape();
  vertex(445,320);
  vertex(445,320);
  vertex(570,800);
  vertex(350,800);
  endShape(CLOSE);
  
  fill(239,241,228,60);
  beginShape();
  vertex(629,325);
  vertex(629,325);
  vertex(780,800);
  vertex(490,800);
  endShape(CLOSE);
  
  fill(239,241,228,60);
  beginShape();
  vertex(740,335);
  vertex(740,335);
  vertex(890,800);
  vertex(600,800);
  endShape(CLOSE);
  
  //반사된 운동기구
  fill(0,90);
  beginShape();
  vertex(450,600); //up left
  vertex(550, 560); //up right
  vertex(800, 980); //down right
  vertex(450, 910); //down left 
  endShape(CLOSE);
  
  //간판
  //185,158,104
  fill(185,158,104);
  beginShape();
  vertex(700,395); 
  vertex(890,405)
  vertex(890,558)
  vertex(700,550); 
  endShape(CLOSE)
  
  fill(201,181,143)
  beginShape();
  vertex(700,395); 
  vertex(890,405)
  vertex(700,558)
  vertex(700,550);
  endShape(CLOSE)
  
  fill(241,236,230)
  beginShape();
  vertex(700,395); 
  vertex(890,405)
  vertex(700,438)
  vertex(700,550);
  endShape(CLOSE)
  
  
  

  //간판 -별
  fill(39,34,34);
  beginShape();
  vertex(776,425); 
  vertex(776,425)
  vertex(790,475)
  vertex(745,495);
  endShape(CLOSE)
  

  beginShape();
  vertex(785,454); 
  vertex(785,452);
  vertex(800,499);
  vertex(735,449);
  endShape(CLOSE)
  

  beginShape();
  vertex(810,455); 
  vertex(810,455)
  vertex(765,485)
  vertex(770,450);
  endShape(CLOSE)
  
  
  fill(251)
  beginShape();
  vertex(780,425); 
  vertex(780,425)
  vertex(794,475)
  vertex(749,495);
  endShape(CLOSE)
  

  beginShape();
  vertex(789,454); 
  vertex(789,452);
  vertex(804,499);
  vertex(739,449);
  endShape(CLOSE)
  

  beginShape();
  vertex(814,455); 
  vertex(814,455)
  vertex(769,485)
  vertex(774,450);
  endShape(CLOSE)
  
  // fill(201,179,131);
  // beginShape();
  // vertex(765,458); 
  // vertex(785,460)
  // vertex(780,468)
  // vertex(769,470);
  // endShape(CLOSE)
  
  fill(251,90);
  ellipse(815,440,80);
  
  
  
  //덤벨
  fill(0)
  beginShape();
  vertex(800,580); 
  vertex(1000,590)
  vertex(1000,608)
  vertex(800,598); 
  endShape(CLOSE)
  
  beginShape();
  vertex(800,640); 
  vertex(1000,660)
  vertex(1000,670)
  vertex(800,675); 
  endShape(CLOSE)
  
  ellipse(1000,575,42);
  ellipse(960,575,34);
  ellipse(920,575,30);
  ellipse(820,575,24);
  fill(11,11,17);
  ellipse(1010,585,40);
  ellipse(970,585,34);
  ellipse(930,585,30);
  ellipse(830,585,24);
  fill(0)
  ellipse(1000,625,47);
  ellipse(960,625,45);
  ellipse(920,625,40);
  ellipse(890,625,40);
  ellipse(820,625,37);
  fill(11,11,17);
  ellipse(1015,655,50);
  ellipse(975,644,45);
  ellipse(895,648,37);
  ellipse(935,645,42);
  
  //벽면 조명(빛)
  //240,240,231
  fill(243,238,228);
  noStroke();
  beginShape();
  vertex(180,280);
  vertex(210,280);
  vertex(280,400);
  vertex(130,350);
  endShape(CLOSE);

  fill(220,214,204,99);
  noStroke();
  beginShape();
  vertex(205,320);
  vertex(205,320);
  vertex(280,400);
  vertex(130,350);
  endShape(CLOSE);
  
  fill(243,238,228);
  noStroke();
  beginShape();
  vertex(180,108);
  vertex(260,180);
  vertex(220,260);
  vertex(180,260);
  endShape(CLOSE);
  
  //조명
  fill(221,186,11);//221,186,11
  noStroke();
  beginShape();
  vertex(200,248);
  vertex(228,250);
  vertex(228,280);
  vertex(200,278);
  endShape(CLOSE);
  fill(228,206,128);
  noStroke();
  beginShape();
  vertex(200,278);
  vertex(228,280);
  vertex(208,286);
  vertex(160,278);
  endShape(CLOSE);
  

  //바닥 - 지지대 뒤쪽
  fill(135,137,133);
  noStroke();
  beginShape();
  vertex(0,1000); //up left
  vertex(0,  750); //up left
  vertex(1000, 700); //down right
  vertex(1000, 1000); //down left 
  endShape(CLOSE);
  
  
  
  //바닥 조명
  fill(210,179,163,90);
  ellipse(960,730,580,40);
  fill(210,179,163,90);
  ellipse(960,740,610,40);
  fill(242,240,240,90);
  ellipse(960,720,400,40);
  
  fill(234,210,194,70);
  ellipse(500,760,800,40)
  
  
  
  //우측 랙 바닥 
  fill(141,121,105);
  beginShape();
  vertex(0, 840); //up left
  vertex(750,810); //up right
  vertex(1000, 860); //down right
  vertex(0, 1000); //down left 
  endShape(CLOSE);
  
  fill(86,72,68);
  beginShape();
  vertex(0, 840); //up left
  vertex(750,810); //up right
  vertex(400, 860); //down right
  vertex(0, 1000); //down left 
  endShape(CLOSE);
  
  
  
  //좌측 랙 바닥
  fill(231,218,209);
  beginShape();
  vertex(0, 740); //up left
  vertex(190,740); //up right
  vertex(490, 775); //down right
  vertex(0,780); //down left 
  endShape(CLOSE);
  
  
  
  
  //배경-벽면 하단 자재
  fill(124,121,107)
  beginShape();
  vertex(0,735); //up left
  vertex(1000, 699); //up right
  vertex(1000, 735); //down right
  vertex(0, 770); //down left 
  endShape(CLOSE);
  
  fill(207,194,194)
  beginShape();
  vertex(0,735); //up left
  vertex(550, 710); //up right
  vertex(550, 743); //down right
  vertex(0, 770); //down left 
  endShape(CLOSE);
  
  fill(20,30,20,29)
  beginShape();
  vertex(0,765); //up left
  vertex(550, 720); //up right
  vertex(550, 743); //down right
  vertex(0, 770); //down left 
  endShape(CLOSE);
  
  
  //조명레일 좌측 
  fill(251);
  beginShape();
  vertex(348,00); //up left
  vertex(380, 0); //up right
  vertex(230, 123); //down right
  vertex(200, 120); //down left 
  endShape(CLOSE);
  fill(0);
  beginShape();
  vertex(364,00); //up left
  vertex(374, 0); //up right
  vertex(220, 123); //down right
  vertex(215, 120); //down left 
  endShape(CLOSE);
  
  
  //조명레일 우측 세로
  fill(251)
  beginShape();
  vertex(548,80); //up left
  vertex(680, 0); //up right
  vertex(700, 0); //down right
  vertex(550, 90); //down left 
  endShape(CLOSE);
  fill(0)
  beginShape();
  vertex(550,88); //up left
  vertex(700, 0); //up right
  vertex(705, 0); //down right
  vertex(548, 92); //down left 
  endShape(CLOSE);
  
  //조명레일 가로
  fill(251)
  beginShape();
  vertex(550,80); //up left
  vertex(1000, 130); //up right
  vertex(1000, 140); //down right
  vertex(550, 90); //down left 
  endShape(CLOSE);
  fill(0)
  beginShape();
  vertex(550,92); //up left
  vertex(1000, 142); //up right
  vertex(1000, 144); //down right
  vertex(550, 94); //down left 
  endShape(CLOSE);
  
  
  //조명 00
  
  fill(227,222,217)
  ellipse(260,70,40,15)
  fill(241,231,182);
  ellipse(260,70,20,15)

  
  
  //조명 01
  fill(227,222,217)
  ellipse(400,10,49,30)
  fill(241,231,182);
  ellipse(400,10,40,30)
  
  fill(255,255,255,30)
  beginShape();
  vertex(400,0); //up left
  vertex(400, 0); //up right
  vertex(600, 800); //down right
  vertex(200, 800); //down left 
  endShape(CLOSE);
  
  //조명 02
  fill(172,128,105)
  beginShape();
  vertex(640,30); //up left
  vertex(660, 30); //up right
  vertex(660, 57); //down right
  vertex(640, 50); //down left 
  endShape(CLOSE);
  fill(227,222,217)
  ellipse(650,50,50,30)
  fill(241,231,182);
  ellipse(650,50,40,25)
  
  fill(255,255,255,30)
  beginShape();
  vertex(650,40); //up left
  vertex(650, 40); //up right
  vertex(800, 700); //down right
  vertex(400, 700); //down left 
  endShape(CLOSE);
  
  //조명 03
  fill(172,128,105)
  beginShape();
  vertex(750,110); //up left
  vertex(770, 112); //up right
  vertex(770, 137); //down right
  vertex(750, 120); //down left 
  endShape(CLOSE);
  fill(227,222,217)
  ellipse(760,134,40,25)
  fill(241,231,182);
  ellipse(760,134,30,20)
  
  fill(255,255,255,30)
  beginShape();
  vertex(760,115); //up left
  vertex(760,115); //up right
  vertex(9500, 700); //down right
  vertex(500, 700); //down left 
  endShape(CLOSE);
  
  

  //뒷쪽 스쿼트랙 뒷쪽 우측 기둥 00
  
  
  fill(21,19,21);
  beginShape();
  vertex(63,0); //up left
  vertex(85, 0); //up right
  vertex(85, 743); //down right
  vertex(63, 770); //down left 
  endShape(CLOSE);
  fill(218,215,189);
  beginShape();
  vertex(63,0); //up left
  vertex(67, 0); //up right
  vertex(67, 743); //down right
  vertex(63, 770); //down left 
  endShape(CLOSE);
  
  
  //뒷쪽 스쿼트랙 뒷쪽 우측 기둥 00 뒤 삼각형
  fill(23,17,22)
  noStroke();
  beginShape();
  vertex(70, 690); //up left
  vertex(74, 689); //up right
  vertex(110, 786); //down right
  vertex(30, 790); //down left 
  endShape(CLOSE);
  
  //뒷쪽 스쿼트랙 좌측 기둥 00
  fill(28,22,30)
  noStroke();
  beginShape();
  vertex(100, 0); //up left
  vertex(135, 0); //up right
  vertex(135, 786); //down right
  vertex(100, 780); //down left 
  endShape(CLOSE);
  
  fill(236,232,225)
  noStroke();
  beginShape();
  vertex(100, 0); //up left
  vertex(103, 0); //up right
  vertex(103, 786); //down right
  vertex(100, 780); //down left 
  endShape(CLOSE);
  
  //뒷쪽 스쿼트랙 좌측 기둥 01
  fill(18,19,28);
  beginShape();
  vertex(230,200); //up left
  vertex(255,200); //up right
  vertex(255, 780); //down right
  vertex(230, 780); //down left 
  endShape(CLOSE);
  
  fill(165,158,154);
  beginShape();
  vertex(230,200); //up left
  vertex(235,200); //up right
  vertex(235, 780); //down right
  vertex(230, 780); //down left 
  endShape(CLOSE);
  
  
  
  
  //뒷쪽 스쿼트랙 정면 상단
  fill(185,168,152);
  beginShape();
  vertex(230,200); //up left
  vertex(260,130); //up right
  vertex(260, 170); //down right
  vertex(230, 230); //down left 
  endShape(CLOSE);
  fill(160,157,148);
  beginShape();
  vertex(238,210); //up left
  vertex(260,170); //up right
  vertex(260, 190); //down right
  vertex(255, 210); //down left 
  endShape(CLOSE);
  
  //뒷쪽  스쿼트랙 우측 상단
  fill(29,28,39);
  beginShape();
  vertex(0,179); //up left
  vertex(230,200); //up right
  vertex(230, 228); //down right
  vertex(0, 210); //down left 
  endShape(CLOSE);
  fill(104,101,93);
  fill(185,178,165);
  beginShape();
  vertex(0,220); //up left
  vertex(230,228); //up right
  vertex(230, 236); //down right
  vertex(0, 220); //down left 
  endShape(CLOSE);
  fill(104,101,93);
  
  //뒷쪽 스쿼트랙 좌측 상단
  fill(32,35,46);
  beginShape();
  vertex(0,110); //up left
  vertex(260,140); //up right
  vertex(260, 170); //down right
  vertex(0, 155); //down left 
  endShape(CLOSE);
  fill(104,101,93);
  
  beginShape();
  vertex(0,135); //up left
  vertex(260,163); //up right
  vertex(260, 175); //down right
  vertex(0, 150); //down left 
  endShape(CLOSE);
  fill(0)
  
  beginShape();
  vertex(0,135); //up left
  vertex(260,163); //up right
  vertex(260, 167); //down right
  vertex(0, 139); //down left 
  endShape(CLOSE);
  
  //뒷쪽 스쿼트랙 지지대 좌측(뒷편))
  fill(11,11,17);
  beginShape();
  vertex(0, 775); //up left
  vertex(450, 755); //up right
  vertex(450, 780); //down right
  vertex(0, 805); //down left 
  endShape(CLOSE);
  fill(225,199,196);
  beginShape();
  vertex(0, 774); //up left
  vertex(450, 754); //up right
  vertex(450, 758); //down right
  vertex(0, 778); //down left 
  endShape(CLOSE);
  
  //뒷쪽 스쿼트랙 뒷쪽 좌측 기둥 001 뒤 삼각형
  fill(16,14,19)
  noStroke();
  beginShape();
  vertex(115, 690); //up left
  vertex(120, 689); //up right
  vertex(170, 786); //down right
  vertex(70, 790); //down left 
  endShape(CLOSE);
  
  
  
  //스쿼트랙 뒷쪽 기둥 001 뒤 삼각형
  fill(19,13,15)
  noStroke();
  beginShape();
  vertex(160, 700); //up left
  vertex(195, 700); //up right
  vertex(245, 830); //down right
  vertex(100, 830); //down left 
  endShape(CLOSE);
  
  //스쿼트랙 뒷쪽 기둥 001
  fill(28,26,35)
  noStroke();
  beginShape();
  vertex(160, 0); //up left
  vertex(200, 0); //up right
  vertex(200, 830); //down right
  vertex(160, 830); //down left 
  endShape(CLOSE);
  fill(90,83,77)
  noStroke();
  beginShape();
  vertex(160, 0); //up left
  vertex(165, 0); //up right
  vertex(165, 830); //down right
  vertex(160, 830); //down left 
  endShape(CLOSE);
  
  
  //스쿼트랙 뒷쪽 기둥 002 뒤 삼각형
  fill(4,4,6);
  beginShape();
  vertex(570, 670); //up left
  vertex(570, 670); //up right
  vertex(500, 800); //down right
  vertex(600, 800); //down left 
  endShape(CLOSE);
  
  
  //스쿼트랙 뒷쪽 기둥 002
  fill(63,60,67);
  noStroke();
  beginShape();
  vertex(550, 0); //up left
  vertex(600, 0); //up right
  vertex(600, 800); //down right
  vertex(550, 800); //down left 
  endShape(CLOSE);
  
  fill(78,72,70)
  noStroke();
  beginShape();
  vertex(550, 0); //up left
  vertex(560, 0); //up right
  vertex(560, 800); //down right
  vertex(550, 800); //down left 
  endShape(CLOSE);
  
  fill(8,9,14);
  noStroke();
  beginShape();
  vertex(560, 490); //up left
  vertex(600, 400); //up right
  vertex(600, 810); //down right
  vertex(560, 810); //down left 
  endShape(CLOSE);
  
  fill(26,24,31);
  beginShape();
  vertex(550,700); //up left
  vertex(560, 700); //up right
  vertex(560, 800); //down right
  vertex(550, 800); //down left
  endShape(CLOSE);
  
  
  // 의 - 윗쪽 삼각형
  fill(5,5,11);
  noStroke();
  beginShape();
  vertex(515, 0); //up left
  vertex(602, 0); //up right
  vertex(560, 50); //down right
  vertex(550, 90); //down left 
  endShape(CLOSE);
  
  fill(14,15,23)
  noStroke();
  beginShape();
  vertex(540, 0); //up left
  vertex(602, 0); //up right
  vertex(602, 80); //down right
  vertex(560, 80); //down left 
  endShape(CLOSE);
  
  
  fill(67,64,67)
  noStroke();
  beginShape();
  vertex(540, 0); //up left
  vertex(542, 0); //up right
  vertex(563, 80); //down right
  vertex(560, 80); //down left 
  endShape(CLOSE);
  
  //지지대 우측(뒷편))
  fill(8,7,12);
  beginShape();
  vertex(0, 820); //up left
  vertex(700, 780); //up right
  vertex(700, 820); //down right
  vertex(0, 865); //down left 
  endShape(CLOSE);
  //-상단부
  fill(190,177,177);
  beginShape();
  vertex(204, 805); //up left
  vertex(700, 780); //up right
  vertex(700, 783); //down right
  vertex(208, 807); //down left 
  endShape(CLOSE);
  
  fill(13,11,16);
  beginShape();
  vertex(536, 787); //up left
  vertex(620, 782); //up right
  vertex(620, 789); //down right
  vertex(534, 793); //down left 
  endShape(CLOSE);
  
    //지지대 좌측 상단부
  fill(98,100,99)
  beginShape();
  vertex(0, 905); //up left
  vertex(1000, 850); //up right
  vertex(1000, 860); //down right
  vertex(0, 920); //down left 
  endShape(CLOSE);
  
  //지지대 좌측 삼각형
  fill(104,101,94)
  beginShape();
  vertex(0, 875); //up left
  vertex(230, 890); //up right
  vertex(230, 890); //down right
  vertex(0, 920); //down left 
  endShape(CLOSE);
  
  fill(0)
  beginShape();
  vertex(0,920); 
  vertex(230, 890)
  vertex(230, 897)
  vertex(927); 
  endShape(CLOSE)
  
  
  //바벨 원판 우측
  fill(9,7,10);
  ellipse(318,665,200)
  fill(82,83,82);
  ellipse(320,669,200)
  fill(0);
  ellipse(280,696,100)
  fill(9,7,10);
  ellipse(328,663,200);
  //홀 우측
  fill(106,97,84);
  ellipse(340,663,40);
  
  //바벨 중앙부
  
  //바벨 지지대(가로) 우측
  fill(0)
  beginShape();
  vertex(205,675); 
  vertex(542,663)
  vertex(542,700)
  vertex(205, 720); 
  endShape(CLOSE)
  
  fill(14,12,16)
  beginShape();
  vertex(205,678); 
  vertex(542,660)
  vertex(542,700)
  vertex(205, 720); 
  endShape(CLOSE)
  
  fill(195,195,195)
  beginShape();
  vertex(205,680); 
  vertex(342,674)
  vertex(342,679)
  vertex(205, 682); 
  endShape(CLOSE)
  
  fill(0)
  beginShape();
  vertex(200,678); 
  vertex(205,678)
  vertex(205, 720)
  vertex(200, 717); 
  endShape(CLOSE)
  
  //ㅂㅂㅈㅇㅂ
  fill(111,104,92)
  beginShape();
  vertex(340,660); 
  vertex(542,635)
  vertex(500,700)
  vertex(345, 670); 
  endShape(CLOSE)
  
  fill(173,154,137)
  beginShape();
  vertex(340,660); 
  vertex(542,635)
  vertex(500,650)
  vertex(345, 668); 
  endShape(CLOSE)
  
  fill(8,9,10)
  beginShape();
  vertex(340,667); 
  vertex(542,637)
  vertex(500,650)
  vertex(345, 668); 
  endShape(CLOSE)
  
  // 스쿼트 랙 기둥 00
  fill(16,14,17);
  noStroke();
  beginShape();
  vertex(5, 0); //up left
  vertex(60, 0); //up right
  vertex(60, 1000); //down right
  vertex(5, 1000); //down left 
  endShape(CLOSE);
  

  
  //#그라데이션 넣기
  fill(60, 53, 53);
  noStroke();
  beginShape();
  vertex(5, 500); //up left
  vertex(60, 500); //up right
  vertex(60, 1000); //down right
  vertex(5, 1000); //down left 
  endShape(CLOSE);
  
  fill(205,191,173);
  noStroke();
  beginShape();
  vertex(5, 0); //up left
  vertex(10, 0); //up right
  vertex(10, 1000); //down right
  vertex(5, 1000); //down left 
  endShape(CLOSE);

  // 스쿼트 랙 기둥 01
  fill(35,31,35);
  noStroke();
  beginShape();
  vertex(280, 0); //up left
  vertex(350, 0); //up right
  vertex(350, 820); //down right
  vertex(280, 870); //down left 
  endShape(CLOSE);
  
  fill(33,24,27);
  beginShape();
  vertex(260, 0); //up left
  vertex(290, 0); //up right
  vertex(290, 830); //down right
  vertex(260, 870); //down left 
  endShape(CLOSE);
  
  
  
  //#그라데이션
  fill(131,116,96);
  beginShape();
  vertex(260, 550); //up left
  vertex(290, 500); //up right
  vertex(290, 830); //down right
  vertex(260, 870); //down left 
  endShape(CLOSE);
  

  fill(0);
  beginShape();
  vertex(250,550);
  vertex(270,540);
  vertex(290,545);
  vertex(260,556);
  endShape();
  
  fill(2,4,3);
  beginShape();
  vertex(250,400);
  vertex(270,380);
  vertex(270,540);
  vertex(250,550);
  endShape();
  
  fill(40,35,38);
  beginShape();
  vertex(270,380);
  vertex(290,380);
  vertex(290,540);
  vertex(270,540);
  endShape();
  
  //기둥 바벨 걸이
  fill(64,57,54);
  beginShape();
  vertex(420,460);
  vertex(430,460);
  vertex(360,540);
  vertex(350,545);
  endShape();
  
  fill(0);
  beginShape();
  vertex(350,435);
  vertex(395,490);
  vertex(360,540);
  vertex(350,545);
  endShape();
  
  fill(48,46,49);
  beginShape();
  vertex(350,385);
  vertex(360,390);
  vertex(360,540);
  vertex(350,545);
  endShape();
  
  
 
  
  
  
  
  
  
  //-중앙명암
  fill(7,4,10);
  beginShape();
  vertex(286, 0); //up left
  vertex(290, 0); //up right
  vertex(290, 830); //down right
  vertex(286, 830); //down left 
  endShape(CLOSE);
  
  //바닥
  fill(63,68,78);
  beginShape();
  vertex(0, 999); //up left
  vertex(1000, 939); //up right
  vertex(1000, 1000); //down right
  vertex(0, 1000); //down left 
  endShape(CLOSE);
  
  //
  fill(20,20,24);
  beginShape();
  vertex(0, 999); //up left
  vertex(800, 939); //up right
  vertex(890, 1000); //down right
  vertex(0, 1000); //down left 
  endShape(CLOSE);
  
  fill(0);
  beginShape();
  vertex(0, 999); //up left
  vertex(800, 939); //up right
  vertex(844, 970); //down right
  vertex(0, 1000); //down left 
  endShape(CLOSE);

  
  // 지지대 좌측
  fill(36,30,33);
  beginShape();
  vertex(0, 920); //up left
  vertex(1000, 860); //up right
  vertex(1000, 940); //down right
  vertex(0, 1000); //down left 
  endShape(CLOSE);
  
  
  // 스쿼트 랙 기둥 앞쪽 02
  fill(11,8,12);
  noStroke();
  beginShape();
  vertex(850, 0); //up left
  vertex(900, 0); //up right
  vertex(900, 820); //down right
  vertex(850, 870); //down left 
  endShape(CLOSE);
  
  fill(46,47,51);
  beginShape();
  vertex(820, 0); //up left
  vertex(850, 0); //up right
  vertex(850, 820); //down right
  vertex(820, 870); //down left 
  endShape(CLOSE);
  
  //-중앙명암
  fill(14, 14, 24);
  beginShape();
  vertex(845, 0); //up left
  vertex(850, 0); //up right
  vertex(850, 870); //down right
  vertex(845, 870); //down left 
  endShape(CLOSE);
  
  fill(7,4,10);
  beginShape();
  vertex(850, 730); //up left
  vertex(904, 726); //up right
  vertex(908, 950); //down right
  vertex(780, 958); //down left 
  endShape(CLOSE);
  
  
  
  //바벨 지지대 (가로)좌측
  fill(16,14,17)
  beginShape();
  vertex(370,670); 
  vertex(842,650)
  vertex(842,700)
  vertex(370, 720); 
  endShape(CLOSE)
  
  fill(25,23,28)
  beginShape();
  vertex(370,666); 
  vertex(842,646)
  vertex(842,652)
  vertex(370, 672); 
  endShape(CLOSE)
  
  fill(30,27,28)
  beginShape();
  vertex(350,675); 
  vertex(370,670)
  vertex(370, 720)
  vertex(350, 719); 
  endShape(CLOSE)
  
  fill(0)
  beginShape();
  vertex(363,671); 
  vertex(370,666)
  vertex(370, 720)
  vertex(365, 719); 
  endShape(CLOSE)
  
 
  
  
  //좌측 삼각형
  fill(32,26,30);
  beginShape();
  vertex(295, 702); //Upl
  vertex(350, 700); //Upr
  vertex(440, 900); //dr
  vertex(224, 916); //dl
  endShape(CLOSE);
  
  beginShape();
  vertex(224, 916); //Upl
  vertex(440, 900); //Upr
  vertex(440, 976); //dr
  vertex(224, 990); //dl
  endShape(CLOSE);
  
  fill(131,116,96);
  beginShape();
  vertex(290, 726); //Upl
  vertex(288, 722); //Upr
  vertex(226, 908);
  vertex(230, 908);//dwl
  endShape(CLOSE);
  
  //좌측 상단 원판
  fill(9,7,10)
  ellipse(13,120,340)
  fill(29,27,26);
  ellipse(23,115,340)
  
  fill(9,7,10)
  ellipse(35,110,340)
  fill(43,36,41);
  ellipse(40,100,340)
  
  fill(9,7,10);
  ellipse(40,100,270)
  fill(39,36,40);
  ellipse(30,100,258)
  
  fill(132,119,110);
  ellipse(40,100,70)
  fill(13,8,10);
  ellipse(40,100,60)
  
  fill(83,76,68);
  beginShape();
  vertex(60,0); //Upl
  vertex(115,0); //Upr
  vertex(57,120); //dr
  vertex(21,82); //dl
  endShape(CLOSE);
  ellipse(40,100,52)
  
  fill(45,39,42);
  ellipse(88,0,53, 30)
  
  fill(0,90)
  ellipse(30,90,258)
  
  
  
  //좌측 하단 원판
  fill(9,7,10)
  ellipse(13,520,360)
  fill(22,19,19);
  ellipse(23,515,360)
  
  fill(9,7,10)
  ellipse(35,510,360)
  fill(33,27,31);
  ellipse(40,500,360)
  
  fill(5,4,6);
  ellipse(40,500,280)
  fill(20,19,21);
  ellipse(40,500,270)
  fill(31,28,30);
  ellipse(40,500,248)
  
  fill(197,181,159);
  ellipse(40,500,80)
  fill(13,8,10);
  ellipse(40,500,70)
  fill(71,61,53);
  ellipse(40,500,60)
  
  
  fill(83,76,68);
  beginShape();
  vertex(54,446); //Upl
  vertex(100,497); //Upr
  vertex(56,526); //dr
  vertex(20,477); //dl
  endShape(CLOSE);
  // ellipse(40,10,52)
  
  // rotate(PI);
  fill(139,131,110)
  ellipse(75,475,72,68)
  fill(40,35,36)
  ellipse(75,475,68,68)
  
  fill(0,50)
  ellipse(28,490,253)
  
  //바벨 원판 좌측 
  // fill(29,22,27);
  fill(50,42,45);
  ellipse(628,658,314);
  
  fill(27,20,26);
  ellipse(630,660,314);
  
  fill(1);
  ellipse(645,658,314,314);
  
  fill(9,7,10);
  ellipse(650,658,314,314);
  fill(74,69,68);
  ellipse(646,655,280);
  fill(18,17,18);
  ellipse(663,655,310,320);
  
  fill(32,30,33);
  ellipse(668,655,265);
  fill(21,19,21);
  ellipse(658,655,255);
  
  fill(0);
  ellipse(658,655,240);
  fill(21,19,21);
  ellipse(670,655,235, 255);
  
  //홀
  fill(134,125,105);
  ellipse(670,655,55,60);
  fill(0);
  ellipse(670,655,45,50);
  
  
  //바벨 좌측
  fill(121,109,96)
  beginShape();
  vertex(665,633); 
  vertex(832,626)
  vertex(834,680)
  vertex(670, 678); 
  endShape(CLOSE)
  ellipse(672,655,40,46);
  fill(5,4,6);
  beginShape();
  vertex(675,640); 
  vertex(832,640)
  vertex(834,648)
  vertex(670, 658); 
  endShape(CLOSE)
  
  beginShape();
  vertex(675,656); 
  vertex(832,656)
  vertex(834,678)
  vertex(670, 680); 
  endShape(CLOSE)
  ellipse(672,660,30,40);
  
  //바벨 좌측 끝
  fill(121,109,96);
  ellipse(830,653,50,54)
  fill(251);
  ellipse(827,653,40,44)
  fill(0);//112,106,100);
  ellipse(833,653,43,48)
  fill(113,104,98);
  ellipse(830,653,43,48)

  //나사(들) // 앞쪽랙 left
  fill(210,179,163);
  ellipse(330,750,20);
  ellipse(332,850,20);
  ellipse(332,938,20);
  ellipse(260,942,20);
  ellipse(405,934,20);
  
  //right
  fill(54,49,52);
  ellipse(825,925,18);
  ellipse(880,922,18);
  fill(149,142,131);
  ellipse(880,840,18);
  fill(73,69,66)
  ellipse(880,760,18);
  
  
  fill(178,156,142);
  ellipse(95,780,8);
  ellipse(180,830,14);
  ellipse(120,780,8);
  ellipse(120,720,8)
  ellipse(120,750,8)// ellipse(260,942,10);
  // ellipse(405,934,10);
  
  //받침대
  fill(42,36,39);
  noStroke();
  beginShape();
  vertex(0, 910); //up left
  vertex(80, 907); //up right
  vertex(80, 916); //down right
  vertex(0, 920); //down left 
  endShape(CLOSE);

  //뒷쪽 기둥 00 구멍
  fill(29,28,39)
  noStroke();
  beginShape();
  vertex(195, 200); //up left
  vertex(200, 200); //up right
  vertex(200, 215); //down right
  vertex(190, 210); //down left 
  endShape(CLOSE);
  
  fill(221,187,12);
  beginShape();
  vertex(195, 250); //up left
  vertex(200, 250); //up right
  vertex(200, 265); //down right
  vertex(190, 260); //down left 
  endShape(CLOSE);
  
  fill(242,238,229);
  beginShape();
  vertex(195, 290); //up left
  vertex(200, 290); //up right
  vertex(200, 305); //down right
  vertex(190, 300); //down left 
  endShape(CLOSE);
  
  fill(234,229,218);
  beginShape();
  vertex(195, 340); //up left
  vertex(200, 340); //up right
  vertex(200, 355); //down right
  vertex(190, 350); //down left 
  endShape(CLOSE);
  
  fill(203,191,180);
  beginShape();
  vertex(195, 390); //up left
  vertex(200, 390); //up right
  vertex(200, 405); //down right
  vertex(190, 400); //down left 
  endShape(CLOSE);
  
  fill(203,191,180);
  beginShape();
  vertex(195, 590); //up left
  vertex(200, 590); //up right
  vertex(200, 605); //down right
  vertex(190, 600); //down left 
  endShape(CLOSE);
  
  fill(203,191,180);
  beginShape();
  vertex(195, 640); //up left
  vertex(200, 640); //up right
  vertex(200, 655); //down right
  vertex(190, 650); //down left 
  endShape(CLOSE);
  
  fill(0);
  beginShape();
  vertex(195, 690); //up left
  vertex(200, 690); //up right
  vertex(200, 705); //down right
  vertex(190, 700); //down left 
  endShape(CLOSE);
  
  fill(19,12,14);
  beginShape();
  vertex(195, 740); //up left
  vertex(200, 740); //up right
  vertex(200, 755); //down right
  vertex(190, 750); //down left 
  endShape(CLOSE);
  
  
  
  //뒷쪽 기둥 01 구멍
  fill(15,11,10);
  ellipse(566, 120,19,15)
  noStroke();
  beginShape();
  vertex(555, 120); //up left
  vertex(565, 120); //up right
  vertex(560, 150); //down right
  vertex(555, 150); //down left 
  endShape(CLOSE);
  
  ellipse(566, 170,19,15)
  noStroke();
  beginShape();
  vertex(555, 170); //up left
  vertex(565, 170); //up right
  vertex(560, 200); //down right
  vertex(555, 200); //down left 
  endShape(CLOSE);
  
  ellipse(566, 220,19,15)
  noStroke();
  beginShape();
  vertex(555, 220); //up left
  vertex(565, 220); //up right
  vertex(560, 250); //down right
  vertex(555, 250); //down left 
  endShape(CLOSE);
  
  ellipse(566, 270,19,15)
  noStroke();
  beginShape();
  vertex(555, 270); //up left
  vertex(565, 270); //up right
  vertex(560, 300); //down right
  vertex(555, 300); //down left 
  endShape(CLOSE);
  
  ellipse(566, 320,19,15)
  noStroke();
  beginShape();
  vertex(555, 320); //up left
  vertex(565, 320); //up right
  vertex(560, 350); //down right
  vertex(555, 350); //down left 
  endShape(CLOSE);
  
  ellipse(566, 370,19,15)
  noStroke();
  beginShape();
  vertex(555, 370); //up left
  vertex(565, 370); //up right
  vertex(560, 400); //down right
  vertex(555, 400); //down left 
  endShape(CLOSE);
  
  ellipse(566, 370,19,15)
  noStroke();
  beginShape();
  vertex(555, 370); //up left
  vertex(565, 370); //up right
  vertex(560, 400); //down right
  vertex(555, 400); //down left 
  endShape(CLOSE);
  
  ellipse(566, 420,19,15)
  noStroke();
  beginShape();
  vertex(555, 420); //up left
  vertex(565, 420); //up right
  vertex(560, 450); //down right
  vertex(555, 450); //down left 
  endShape(CLOSE);
  
  ellipse(566, 470,19,15)
  noStroke();
  beginShape();
  vertex(555, 470); //up left
  vertex(565, 470); //up right
  vertex(560, 500); //down right
  vertex(555, 500); //down left 
  endShape(CLOSE);
  
  ellipse(566, 520,19,15)
  noStroke();
  beginShape();
  vertex(555, 520); //up left
  vertex(565, 520); //up right
  vertex(560, 550); //down right
  vertex(555, 550); //down left 
  endShape(CLOSE);
  
  //기둥002 구멍
  fill(0);
  ellipse(830, 20,20,34)
  fill(180,171,157);
  noStroke();
  beginShape();
  vertex(820, 05); //up left
  vertex(830, 10); //up right
  vertex(830, 20); //down right
  vertex(820, 30); //down left 
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 90,20,34)
  fill(187,175,158);
  beginShape();
  vertex(820, 75); //up left
  vertex(830, 80); //up right
  vertex(830, 90); //down right
  vertex(820, 100); //down left 
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 160,20,34)
  fill(197,185,175);
  beginShape();
  vertex(820, 145); //up left
  vertex(830, 150); //up right
  vertex(830, 160); //down right
  vertex(820, 170); //down left 
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 230,20,34)
  fill(215,202,190);
  beginShape();
  vertex(820, 215); //up left
  vertex(830, 220); //up right
  vertex(830, 230); //down right
  vertex(820, 240); //down left 
  endShape(CLOSE);
  
  
  fill(0);
  ellipse(830, 300,20,34)
  fill(232,215,201);
  beginShape();
  vertex(820, 285); //up left
  vertex(830, 290); //up right
  vertex(830, 300); //down right
  vertex(820, 310); //down left  
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 370,20,34)
  fill(120,104,87);
  beginShape();
  vertex(820, 355); //up left
  vertex(830, 360); //up right
  vertex(830, 370); //down right
  vertex(820, 380); //down left  
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 440,20,34);
  fill(223,213,190);
  beginShape();
  vertex(820, 425); //up left
  vertex(830, 430); //up right
  vertex(830, 440); //down right
  vertex(820, 450); //down left  
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 510,20,34)
  fill(192,169,123);
  beginShape();
  vertex(820, 495); //up left
  vertex(830, 500); //up right
  vertex(830, 510); //down right
  vertex(820, 520); //down left  
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 580,20,34)
  fill(40,40,45);
  beginShape();
  vertex(820, 565); //up left
  vertex(830, 570); //up right
  vertex(830, 580); //down right
  vertex(820, 590); //down left  
  endShape(CLOSE);
  
 
  
  fill(0);
  ellipse(830, 720,20,34)
  fill(124,121,106);
  beginShape();
  vertex(820, 705); //up left
  vertex(830, 710); //up right
  vertex(830, 720); //down right
  vertex(820, 730); //down left  
  endShape(CLOSE);
  
  fill(0);
  ellipse(830, 790,20,34)
  fill(136,137,133);
  beginShape();
  vertex(820, 775); //up left
  vertex(830, 780); //up right
  vertex(830, 790); //down right
  vertex(820, 800); //down left  
  endShape(CLOSE);
  
  
}
<template>
	<div>
		<div style="position:fixed;">
			<top></top>
			<div class="nav">
				<ul>
					<li>关于求标
						<div class="second-menu">
							<ul>
								<li v-for="item in gyqb" @click="active(item.name)">{{item.title}}</li>
							</ul>
						</div>
					</li>
					<li>交易须知
						<div class="second-menu">
							<ul>
								<li v-for="item in jyxz" @click="active(item.name)">{{item.title}}</li>
							</ul>
						</div>
					</li>
					<li>售后服务
						<div class="second-menu">
							<ul>
								<li v-for="item in shfw" @click="active(item.name)">{{item.title}}</li>
							</ul>
						</div>
					</li>
					<li>增值服务
						<div class="second-menu">
							<ul>
								<li v-for="item in zzfw" @click="active(item.name)">{{item.title}}</li>
							</ul>
						</div>
					</li>
					<li>常见问题</li>
				</ul>
			</div>
		</div>
		<div class="con">
			<ul>
				<li v-show="show=='gsjj'">
					<div class="con-title">公司简介</div>
					<div class="con-content">
						<p>
							求标网（浙江求标网络科技有限公司），是一家集商标代理、商标注册、商标设计、商标转让、商标交易等一体的科技创新型高新企业，坐落于中国电子商务之都——杭州。其前身为2006年成立的胜大商标事务所，是经国家工商行政管理总局商标局备案的代理机构。
						</p>
						<p>
							求标网专注于知识产权行业，致力于解决企业商标不易注册以及商标转让交易价格过高等问题，建立了“专、实、快、保”的高标准服务，为中小型企业解决了“一标难求”的困境，多次获得客户赞扬，同时也被凤凰网、新华网、浙江日报、中国经济网、网易新闻、新浪新闻等数十家知名媒体报道。
						</p>
						<p>
							公司现有员工200多人，其中拥有多年知识产权从业经验的专业代理人员及品牌设计师50余人。经过12年发展，求标网已成为拥有四个分公司的集团化企业，业务范围涵盖商标、知识产权、专利行业的各个方面，累计处理案件28000件以上，在致力于为企业提供优质服务的信念上，一路精益求精，力争完美。 
							“买商标，就上求标网”不仅是一句宣传口号，也是“求标人”为之奋斗的目标！
							求标网助您实行中华名族品牌复兴梦！
						</p>
					</div>
				</li>
				<li v-show="show=='ryzz'">
					<div class="con-title">荣誉资质</div>
					<div class="con-content">
						<ul>
							<img class="preview-img" v-for="(item, index) in listryzz" :src="item.src" height="100" @click="$preview.open(index, listryzz)">
						</ul>
					</div>
				</li>
				<li v-show="show=='bghj'">
					<div class="con-title">办公环境</div>
					<div class="con-content">
						<ul>
							<img class="preview-img" v-for="(item, index) in listbghj" :src="item.src" height="100" @click="$preview.open(index, listbghj)">
						</ul>
					</div>
				</li>
				<li v-show="show=='gslc'">
					<div class="con-title">公司历程</div>
					<div class="con-content">
						<p>2006.2 正式进军知识产权领域 </p>
						<p>2010.1.19 绍兴胜大商标事务所有限公司成立 </p>
						<p>2011 荣获绍兴地区代理量冠军</p>
						<p>2012.5.25 诸暨行政办证中心服务窗口成立 </p>
						<p>2012—2016 蝉联绍兴地区代理量冠军</p>
						<p> 2015.7.21 绍兴求标网络科技有限公司成立 </p>
						<p>2015.8.18 求标网正式上线，吉祥物“求求”诞生</p>
						<p>2015.10 求标网荣获“诚信认证示范单位”</p>
						<p>2017.7.5 求标网温州公司成立 </p>
						<p>2017.8.19 求标网杭州总部成立，同时更名浙江求标网络科技有限公司 </p>
						<p>2018年计划目标：成立北京案件中心、专利中心，完成知识产权全产业链布局 2020年计划目标：成为行业龙头、达成中国顶尖的知识产权一站式服务平台目标 </p>
						<p>2023年计划目标：公司实现整体上市</p>
					</div>
				</li>
				<li v-show="show=='ygfc'">
					<div class="con-title">员工风采</div>
					<div class="con-content">
						<ul>
							<img class="preview-img" v-for="(item, index) in listygfc" :src="item.src" height="100" @click="$preview.open(index, listygfc)">
						</ul>
					</div>
				</li>
				<li v-show="show=='lxwm'">
					<div class="con-title">联系我们</div>
					<div class="con-content">
						<ul>
							<span>名称：浙江求标网络科技有限公司</span>
							<span>网址：http://www.qiutm.com/</span>
							<span>地址：杭州市滨江区滨安路650号IX-WORK大厦A幢11层（浙江总部营运中心）</span>
							<span>电话：400-8776-278</span>
						</ul>
					</div>
				</li>
				<li v-show="show=='cpyc'">
					<div class="con-title">诚聘英才</div>
					<div class="con-content">
							<p>
								技术总监
							</p>
							<p>
								岗位职责：
							</p>
							<p>
								1、全面把握重要技术决策，指导开发工作，以及关键技术的攻关，发现和解决存在的技术问题；&nbsp;
							</p>
							<p>
								2、开发和维护统一的软件开发架构和软件开发规范，对系统的重用、扩展、安全、性能、伸缩性、简洁等做系统级的把握，为技术决策提供规则；
							</p>
							<p>
								3、负责解决方案的业务流程、信息数据结构的建模；管理好部门，做好保密协议；
							</p>
							<p>
								4、对相关系统架构方案、设计、代码进行评审，控制产品系统架构质量；
							</p>
							<p>
								5、参与项目实施过程中的需求调研与分析。
							</p>
							<p>
								6.选型并协调系统管理员，建立开发团队的内部沟通系统，例如，wiki、博客、即时通讯工具、项目管理工具、bug提交系统等。&nbsp;
							</p>
							<p>
								任职要求：
							</p>
							<p>
								1、5年以上Java技术开发经验，2年以上技术管理经验，至少2个大型软件设计和研发经验；
							</p>
							<p>
								2、熟练JAVA相关技术、J2EE架构和设计模式，熟练运用WebService相关技术；&nbsp;
							</p>
							<p>
								3、精通使用MySQL，oracle ，SQL server数据库、&nbsp;
							</p>
							<p>
								4、熟练ASP.NET编程、html网页制作、熟悉Web前端技术，包括 Javascript，ajax，json，jQuery,等开发框架；
							</p>
							<p>
								5.熟悉php，对快速建站有一定的经验&nbsp;
							</p>
							<p>
								<br />
							</p>
							<p>
								运营总监
							</p>
							<p>
								岗位职责：
							</p>
							<p>
								1、负责企业的全网营销整体规划和运营执行，尤其是新媒体运营，挖掘各种网络资源，组织策划各种网络营销活动，达成公司制定的业绩目标。
							</p>
							<p>
								2、负责公司平台全面运营推广,领导团队完成目标，确保完成公司下达的任务；&nbsp;
							</p>
							<p>
								3、制定网站运营、市场推广策略与详细的营销计划；开展活动的策划，并有较强的执行及监督能力；推广活动的实施,跟进及进度效果监控,数据分析,总结,备案；
							</p>
							<p>
								4、不断完善营销方案,并对运营效果负责；&nbsp;
							</p>
							<p>
								5、根据消费者需求、促销及推广活动结果的反馈,统计分析各类网站数据,更新和完善网站内容并对产品推广、销售策略、运营情况、消费者的体验情况及业务流程等进行分析,并提出改进方案。
							</p>
							<p>
								任职要求：&nbsp;
							</p>
							<p>
								1、大专或以上学历，三年以上运营岗位工作经验，有运营总监的岗位经历的，具备较强的网络营销策划及组织能力，有新媒体运营、视频直播运营工作经验者优先；
							</p>
							<p>
								2、对全网营销有深刻的认识和见解，熟悉各网络平台的规则和推广工具、推广方式；
							</p>
							<p>
								3、对互联网有深刻的理解，并对其发展及其趋势有较深入的认知; 具备创造性思维及逻辑思维能力；&nbsp;
							</p>
							<p>
								<br />
							</p>
							<p>
								人事总监
							</p>
							<p>
								岗位职责：
							</p>
							<p>
								1．根据公司战略目标，制订和推行人力资源部年度工作计划；
							</p>
							<p>
								2．制订、执行、监督和完善公司各项劳动人事制度；
							</p>
							<p>
								3．制订公司绩效考核制度，组织实施绩效考核，并对各部门绩效评价过程进行监督控制，不断完善绩效管理体系；
							</p>
							<p>
								4．制订薪酬、福利以及相关的激励保障制度；
							</p>
							<p>
								5．根据公司发展的需要，制订并执行人员招聘计划，建立和完善公司的招聘流程和招聘关系；
							</p>
							<p>
								6．做好员工职业生涯发展规划，负责制定后备人才选拔方案和人才储备机制。
							</p>
							<p>
								7．制订并实施公司年度培训计划，
							</p>
							<p>
								8．组织新员工入职培训及县管制度培训并对培训效果进行调研和评估，督导各部门开展培训工作；&nbsp;
							</p>
							<p>
								9、解决行政人事部与其他部门的协调工作；
							</p>
							<p>
								10、负责协调内外关系，与员工进行积极沟通；帮助各部门建立积极的员工关系，处理劳资纠纷等
							</p>
							<p>
								职位要求：
							</p>
							<p>
								1．人力资源管理、心理学、企业及工商管理专业本科以上学历&nbsp;
							</p>
							<p>
								2.经营管理、法律、谈判技巧、财务管理等相关知识培训&nbsp;
							</p>
							<p>
								3.具备 5 年以上外企、大中型企业相关工作经验，熟悉国家劳动人事政策法规及人事行政管理经验；
							</p>
							<p>
								4.了解财务、统计学、法学、心理学、组织行为学、公共关系学等专业基本知识， 人力资源开发与管理知识，懂得各项业务的基本流程。
							</p>
							<p>
								<br />
							</p>
							<p>
								首席培训师
							</p>
							<p>
								岗位职责：&nbsp;
							</p>
							<p>
								1．参与企业员工和企业发展培训需要调研，汇总整理培训需求；
							</p>
							<p>
								2．分析不同岗位的培训需求，对相关的课程和企业需求进行收集和评估，开发和设计企业内部培训，制定培训计划&nbsp;
							</p>
							<p>
								3.按照企业培训计划，负责相关模块课程的讲授工作；
							</p>
							<p>
								&nbsp;4.负责培训后效果的考核及改进措施的提出；&nbsp;
							</p>
							<p>
								任职要求：
							</p>
							<p>
								1．熟悉员工培训制度和流程；熟练运用ppt等办公软件。
							</p>
							<p>
								2．良好的人际理解与沟通协调能力和组织能力，善于倾听。&nbsp;
							</p>
							<p>
								3．具有较好的文字功底和语言表达能力；
							</p>
							<p>
								4．团队合作：愿意与他人合作，主动与其他成员进行沟通交流，共同分享信息、知识、资源
							</p>
					</div>
				</li>
				<li v-show="show=='aqbz'">
					<div class="con-title">安全保障</div>
					<div class="con-content">
						<p>
							SERVICE GUARANTEE 三大安全保障，确保您在求标网的商标转让成功，没有任何风险。
						</p>
						<p>
							100%商标公证---------- 100% OF TRADEMARK NOTARIZED&nbsp;
						</p>
						<p>
							凡是委托求标网代理商标转让事宜，求标网保证所涉及的商标真实可靠，在约定的时间内100%让持有人做商标声明公证，保证商标顺利转让。 凡在求标网购买的商标，我司保证商标出让方100%办理由中国公证机关开具的商标转让声明及公证书，事实经过公证证明、国家证明它的真实性、合法性，具有法律效力，保障商标受让人的权益。 商标转让需要到国家商标总局办理注册商标转让手续商标转让要8个月的时间。在办理手续时如果印章和签字与商标档案中的权利人的印章签字一致，则不需要公证，否则商标局要求申请人补正公证书后才给予办理核准转让手续。但求标网为了保证商标的第一时间能够核准不会出现补正的状况，我们要求每一个商标必须100%公证，就是为了能够让受让方有法律保障，也能够保证转让流程时间缩短。
						</p>
						<p>
							&nbsp;一对一担保服务 ----------ONE-TO -ONE GUARANTEE SERVICE
						</p>
						<p>
							凡在求标网购买商标的客户，我司与购买方及商标出让方签定协议，保障双方的利益。 每个客户在求标网办理每一项业务，我们都会指派专业的专职人员对客户进行全程跟进服务，再综合沉淀12年的专业平台优势，我们承诺对客户的服务更专业、更高效'更链办理好客户麻事项。 求标网秉承着对于买卖双方负责的态度实行一对一担保服务，也就是买卖双方不需要有任何的顾虑和担忧所有的一切流程以及违约责任都会事先对接好并签订相应合同，任何一方出现流程或者违约责任，求标网都会根据合同的条款承担相应的担保责任。
						</p>
						<p>
							&nbsp;买卖双方担保交易 -------BUYERS AND SELLERS GUARANTEE TRANSACTION------
						</p>
						<p>
							在求标网进行商标买卖的双方，由居间方求标网做转让担保，转让交易手续由求标网统一办理。购买商标时求标网直接对买方负责，买方购买商标款经由求标网转付给持有人出现异常情况，求标网第一时间自行对买方赔尝以保证买方资金的安全性，同时对转让流程全程篮管；对卖方求标网会把卖方商标推荐给有需求的客户，转让过户手续全程求标网办理，保证在客户签约后在约定的时间内商标款项及时支付给买方。 商标买卖双方达成转让意向之后求标网公司将会和买卖双方签订相应的转让协议及法律保障保证转让方和受让方能够有法可依，有理可讲。
						</p>
					</div>
				</li>
				<li v-show="show=='fkfs'">
					<div class="con-title">付款方式</div>
					<div class="con-content">
						<p>
							对公付款、企业支付宝、对私付款均可。
						</p>
						<p>
							财 务 帐 号 ---THE FINANCIAL ACCOUNT---
						</p>
						<p>
							对公打款：
						</p>
						<p>
							户名：浙江求标网络科技有限公司
						</p>
						<p>
							帐号：12110142 0920 0062 955
						</p>
						<p>
							开户行：中国工商银行绍兴胜利路支行
						</p>
						<p>
							企业支付宝：qiutmsc@163.com
						</p>
						<p>
							户名：谢忠杭
						</p>
						<p>
							帐号：6212 2612 1100 5827 920
						</p>
						<p>
							开户行：中国工商银行绍兴分行
						</p>
					</div>
				</li>
				<li v-show="show=='sbzr'">
					<div class="con-title">商标转让</div>
					<div class="con-content">
						<p>
							1、商标转让双方签订《商标转让合同/协议》，提出商标转让申请。
						</p>
						<p>
							2、商标持有人办理商标公证，获取《商标申明公证书》。
						</p>
						<p>
							3、将准备好的材料和公证书提交到商标局，缴纳转让规费。
						</p>
						<p>
							4、商标局下发受理书，并开始进行审查。
						</p>
						<p>
							5、商标局刊登公告并。
						</p>
						<p>
							6、公告期结束后双方下发《核准转让注册商标证明》。
						</p>
					</div>
				</li>
				<li v-show="show=='sbzc'">
					<div class="con-title">商标注册</div>
					<div class="con-content">
						<p>
							1、国家商标局自收到申请文件到发出受理通知书的时间为1—2个月。
						</p>
						<p>
							2、自收到受理通知书起4—6个月时间，国家商标局对提出的商标进行审核。
						</p>
						<p>
							3、审核通过后刊登核准公告并发出《核准注册商标证明》。
						</p>
						<p>
							4、商标注册所需时间共6-8个月。
						</p>
					</div>
				</li>
				<li v-show="show=='bqdj'">
					<div class="con-title">版权登记</div>
					<div class="con-content">
						<p>
							1、提交申请表
						</p>
						<p>
							2、版权中心接收文件并进行初步审核
						</p>
						<p>
							3、审核通过后缴纳费用，未通过的需要补正或撤销申请
						</p>
						<p>
							4、版权中心受理申请并发出受理通知书
						</p>
						<p>
							5、审核通过版权中心予以登记并办法登记证书并公告
						</p>
					</div>
				</li>
				<li v-show="show=='zlsq'">
					<div class="con-title">专利申请</div>
					<div class="con-content">
						<p>
							1、提交技术交底书及委托书
						</p>
						<p>
							2、双方技术交流
						</p>
						<p>
							3、签署代理协议
						</p>
						<p>
							4、支付代理费及官方费用
						</p>
						<p>
							5、撰写专利申请文件
						</p>
						<p>
							6、提交专利申请&nbsp;
						</p>
						<p>
							7、提交代理报告和专利局的受理通知书
						</p>
						<p>
							8、等待专利局审查授权
						</p>
					</div>
				</li>
				<li v-show="show=='tsjy'">
					<div class="con-title">投诉建议</div>
					<div class="con-content">
						<p>
							若您对求标网有任何疑问，均可拨打400-877-6278，或者发邮件给CEO（ceo@qiutm.com），24小时内给您回复。
						</p>
					</div>
				</li>
				<li v-show="show=='kfzx'">
					<div class="con-title">客服中心</div>
					<div class="con-content">
						<p>
							24小时全国客户免费服务热线：400-877-6278
						</p>
						<p>
							商标品牌强则中国强，小商标成就中华民族大品牌-求标网!欢迎您的合作，牌梦想！
						</p>
						<p>
							求标网四大服务承诺：
						</p>
						<p>
							1、求标网为您提供高价值商标品牌的服务，我们以认真，快，坚守诚信与负责的心态；
						</p>
						<p>
							2、为您在品牌商标交易流程中保证您安全可靠实现您要的结果；
						</p>
						<p>
							3、以求标网专业商标代理机构和完善的服务体系为后盾；
						</p>
						<p>
							4、坚持求标网可信价值观“客户至上、无限服务”。
						</p>
						<p>
							求标网通过专业的知识产权服务，帮助您实现中华名族品牌复兴梦！
						</p>
					</div>
				</li>
				<li v-show="show=='jszc'">
					<div class="con-title">技术支持</div>
					<div class="con-content">
                        <p>
							求标网有强大的技术团队支持：
						</p>
						<p>
							1、运营团队独创“专、实、快、保”的高标准服务，解决中小企业“一标难求”的困境。
						</p>
						<p>
							2、运营团队已累计处理案件28000件以上，12年商标知识产权从业经验积累。
						</p>
						<p>
							3、拥有多年知识产权从业经验的专业代理人员及品牌设计师50余人。
						</p>
						<p>
							4、目前求标网拥有四个不同地区分公司，更方便为客户办理商标服务。
						</p>
					</div>
				</li>
				<li v-show="show=='pzcn'">
					<div class="con-title">品质承诺</div>
					<div class="con-content">
						<p>
							1、商标转让有专业专职人员顾问式销售，确保资料真实性、安全性、高效性，同时交易过程中的风险由求标网负责承担。
						</p>
						<p>
							2、求标网本着诚信，务实创新的精神，坚持以客户为本的服务理念：务实创新，为客户创造价值，和谐共进，
						</p>
						<p>
							3、坚持求标网核心价值观：客户第一、团队合作、诚信创造、激情责任。
						</p>
						<p>
							4、为您在求标网得到安全可靠的服务，求标网团队服务承诺：
						</p>
						<p>
							（1）凡是从求标网构买的商标，现承诺保证成功的转让到您的名下。
						</p>
						<p>
							（2）求标网团队承诺，为您提供的资料真实，可靠，若由此引起的一切责任由求标网承担。
						</p>
					</div>
				</li>
				<li v-show="show=='ppsj'">
					<div class="con-title">品牌设计</div>
					<div class="con-content">
						
					</div>
				</li>
				<li v-show="show=='dsfw'">
					<div class="con-title">电商服务</div>
					<div class="con-content">
						<p>
							京 东 入 驻 ------JD OCCUPANCY-----
						</p>
						<p>
							客户需要准备的资料
						</p>
						<p>
							A. 卖家入驻联系人信息 京东账号： 密码： （由客户事先注册好）&nbsp;联系人姓名： 联系人手机： 联系人电子邮箱： 特别备注：用于入驻过程中接收京东反馈的入驻通知，（邮箱请先验证）
						</p>
						<p>
							B. 卖家入驻所需提供资料：（均需加盖开店公司章，并以扫描件形式发给我司专业入驻人员）&nbsp;
						</p>
						<p>
							1、公司营业执照副本复印件盖章；
						</p>
						<p>
							2、 法人身份证反面盖章；
						</p>
						<p>
							3、组织机构代码证复印件盖章；
						</p>
						<p>
							4、 税务登记证（国税地税)复印件盖章；
						</p>
						<p>
							5、银行开户许可证复印件盖章；
						</p>
						<p>
							6、一般纳税人(部分商家提供）请提供增值税一般纳税人资格证书（需加盖开店主体红章） 或增值税一般纳税人申请认定表（需加盖开店主体红章）完全由客户自行提供；
						</p>
						<p>
							7、质检报告复印件盖章（如产品需要）客户可以自己去质检机构办理，也可以委托我司进行代为办理；
						</p>
						<p>
							8、授权书复印件盖章：由业务员将这3份资料提供给客户进行盖章；
						</p>
						<p>
							9、 商标注册证复印盖章；
						</p>
						<p>
							10、持有人身份证复印件盖章（持有人为公司的不需要）。
						</p>
						<p>
							<br />
						</p>
						<p>
							天猫入驻 ----TMALL OCCUPANCY----&nbsp;
						</p>
						<p>
							客户需要准备的资料
						</p>
						<p>
							A. 卖家入驻联系人信息 淘宝会员账号： 密码： （由客户事先注册好） 企业支付宝账号： （由客户事先注册好） 联系人姓名： 电话： 邮箱： （接受天猫授权收取邮件用） 特别备注：支付宝不能和天猫淘宝账号等进行绑定
						</p>
						<p>
							B. 卖家入驻所需提交的材料（均需加盖开店公司章，并防3描件形式发给我司专业入驻人员）
						</p>
						<p>
							1、税务登记证复印件盖章；
						</p>
						<p>
							2、 组织机构代码证复印件盖章；
						</p>
						<p>
							3、银行开户许可复印件盖章；
						</p>
						<p>
							4、法人身份证复印件盖章；
						</p>
						<p>
							5、店铺负责人身份证复印件盖章（和法人同一人只用一份);
						</p>
						<p>
							6、 产品清单EXCL文档;
						</p>
						<p>
							7、一般纳税人（部分商家提供）请提供增值税一般纳税人资格证书（需加盖开店主体红章） 或增值税一般纳税人申请认定表（需加盖开店主体红章）完全由客户自行提供；
						</p>
						<p>
							8、检报告复印件盖章（部分商家必填）用户可以自己去质检机构办理，也可以委托我司讲行代为办理。
						</p>
						<p>
							9、商标注册证复印件盖章； （由业务员将这4份资料提供给客户进行盖章）
						</p>
						<p>
							10、支付宝授权书盖章；
						</p>
						<p>
							11、持有人身份证复印件盖章（持有人为公司的不需要）；
						</p>
						<p>
							12、旗舰店开店独占授权书盖章；&nbsp;
						</p>
						<p>
							<br />
						</p>
						<p>
							1号店入驻 1 号 店 入 驻 -----NO.1 STORE OCCUPANCY-----&nbsp;
						</p>
						<p>
							入驻流程（填写资料）：&nbsp;
						</p>
						<p>
							商家基本信息----公司负责人信息----商家产品信息----商家运营能力----商家业务联系人信息----结算账号&nbsp;
						</p>
						<p>
							客户需要准备的资料
						</p>
						<p>
							A. 卖家入入驻联系人信息 1号店账号： 密码： （由客户事先注册好） 负责人信息： 电话: 姓名: 商家业务联系人信息： 电话: 姓名:
						</p>
						<p>
							B. 卖家入驻所需提供资料（均需加盖开店公司章，并以扫描件形式发给我司专业入驻人员）
						</p>
						<p>
							1、公司营业执照副本复印件盖章；&nbsp;
						</p>
						<p>
							2、法人身份证正反面盖章；
						</p>
						<p>
							3、 组织机构代码证复印
						</p>
					</div>
				</li>
				<li v-show="show=='flfw'">
					<div class="con-title">法律服务</div>
					<div class="con-content">
						<p>
							<strong><span style="color:#E53333;">确权</span></strong>：通过注册、转让等手段完成商标确权工作，以达到获得商标专用权目的。
						</p>
						<p>
							<strong><span style="color:#E53333;">用权</span></strong>：帮助企业规范使用商标权，确保商标权的持续有效。帮助企业解决知识产权纠纷，从而保证品牌的纯净性 。
						</p>
					</div>
				</li>
			</ul>
		</div>
		<home-bottom></home-bottom>
	</div>
</template>
<script>
import HomeBottom from '@/page/home/components/Bottom.vue'
import Top from '@/page/common/Top.vue'
export default {
	name:'About',
	data(){
		return{
			gyqb:[{title:'公司简介',name:'gsjj'},{title:'荣誉资质',name:'ryzz'},{title:'办公环境',name:'bghj'},{title:'公司历程',name:'gslc'},{title:'员工风采',name:'ygfc'},{title:'联系我们',name:'lxwm'},{title:'诚聘英才',name:'cpyc'}],
			jyxz:[{title:'安全保障',name:'aqbz'},{title:'付款方式',name:'fkfs'},{title:'商标转让',name:'sbzr'},{title:'商标注册',name:'sbzc'},{title:'版权登记',name:'bqdj'},{title:'专利申请',name:'zlsq'}],
			shfw:[{title:'投诉建议',name:'tsjy'},{title:'客服中心',name:'kfzx'},{title:'技术支持',name:'jszc'},{title:'品质承诺',name:'pzcn'}],
			zzfw:[{title:'品牌设计',name:'ppsj'},{title:'电商服务',name:'dsfw'},{title:'法律服务',name:'flfw'}],
			show:'gsjj',
			isActive:true,
			listryzz:[{
					src:require('@/assets/images/ryzz/青年创客奖.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ryzz/绍兴职业技术学院校外实训基地.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ryzz/新锐成长奖.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ryzz/浙江省科技型中小企业2016.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ryzz/浙江省科技型中小企业2017.jpg'),
					w:600,
					h:400,
			}],
			listbghj:[{
					src:require('@/assets/images/bghj/办公区1.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/bghj/办公区2.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/bghj/办公区3.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/bghj/办公室一角1.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/bghj/办公一角2.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/bghj/小会议室.jpg'),
					w:600,
					h:400,
			}],
			listygfc:[{
					src:require('@/assets/images/ygfc/让人生更精彩-主题培训.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/年会.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/求标网2周年.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/九型人格讲座.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/圣诞节1.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/拓宽训练2.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/拓宽训练3.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/拓展训练1.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/拓展训练4.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/拓展训练5.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/营之有道主题课程.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/游玩鲁迅故里.jpg'),
					w:600,
					h:400,
				},{
					src:require('@/assets/images/ygfc/实战管理团队培训会.jpg'),
					w:600,
					h:400,
			}],
		}
	},
	methods:{
		active:function(i){
			// console.log(i)
			this.show = i;
		}
	},
	components:{
		HomeBottom,
		Top,
	},
	mounted(){
		$('.nav>ul>li').click(function(){
			$(this).find('.second-menu').show().parent().siblings().find('.second-menu').hide()
		})
		$('.second-menu ul li').click(function(event){
			event.stopPropagation();
			$(this).parent().parent().hide()
		})
		//点击屏幕关闭导航
		$('.con').click(function(){
			$('.second-menu').hide()
		})
	}
}
//
// $(function(){
// 	//点击导航 弹出2级导航
// 	$('.nav>ul>li').click(function(){
// 		$(this).find('.second-menu').show().parent().siblings().find('.second-menu').hide()
// 	})
// 	$('.second-menu ul li').click(function(event){
// 		event.stopPropagation();
// 		$(this).parent().parent().hide()
// 	})
// 	//点击屏幕关闭导航
// 	$('.con').click(function(){
// 		$('.second-menu').hide()
// 	})
// })
// </script>
<style>
	/*.top{width: 100vw;height: 11.7vw;background: #E50011;display: flex;}
	.top span{display: inline-block;text-align: center;line-height: 11.7vw;}
	.top .back{width: 10.6vw;height: 100%;color: white;font-size: 7vw;}
	.top .mode{color: white;font-size: 5vw;letter-spacing: 1px;flex: 1;}
	.top .menu{width: 10.6vw;height: 100%;color: white;font-size: 6vw;}*/
	.hide{display:none;}
	.nav{width: 100vw;height: 11.7vw;background: #EFEFEF;}
	.nav>ul{width: 100%;height: 100%;display: flex;}
	.nav>ul>li{width: 20%;height: 100%;line-height: 11.7vw;font-size: .7rem;text-align: center;position: relative;}
	.nav .second-menu{display: none; position: absolute;width: 20vw;left: 0;top: 11.7vw;background: white;border-radius: 2vw; box-shadow: 2px -2px 10px #ABABAB;}
	.nav .second-menu ul{padding: 2vw 2vw;}
	.nav .second-menu ul li{margin-top: 1vw; height: 6vw;line-height: 6vw;color: #ACACAC;border-bottom: 1px solid #ACACAC;}
	.nav .second-menu ul li:last-child{border-bottom: none;}
	.con{width: 100vw;padding-top:23.4vw;}
	.con .con-title{width: 100vw;height: 15.7vw;line-height: 15.7vw;color: #E50011;font-size: 5vw;letter-spacing: 1px;text-align: center;}
	.con .con-content{width: 90vw;margin: 0 auto;}
	.con .con-content p{text-indent: 2em;font-size: .7rem;line-height: 7vw;}
	.con .con-content span{font-size: .7rem;line-height: 7vw;}
	.con .con-content ul{margin: 0 auto; width: 90vw; display: flex;justify-content: space-between; flex-wrap: wrap;}
	.con .con-content ul img{margin: 1.5vw 0; width: 44vw;height: 30vw; box-shadow: 2px 2px 5px #666;}
</style>
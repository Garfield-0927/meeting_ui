// pages/info/index.js
Page({
  data: {
    confInfo:{
      name:"第三节智能优化与调度国际会议",
      simpleInfo:"该会议是指组织有领导有目的的议事活动。这个会议 主要的研究方向是智能优化与调度在芳香的偏上。"
    },
    tabbar:[
      {
        name:"简要信息",
        id:1,
        isActive:true,
        isShow:true
      },
      {
        name:"详细信息",
        id:2,
        isActive:false,
        isShow:true
      },
      {
        name:"收费说明",
        id:3,
        isActive:false,
        isShow:true
      },
      {
        name:"留言",
        id:4,
        isActive:false,
        isShow:true
      }
    ],
    
    detail_list:[
      {
        id:1,
        link:'../../assets/time.png',
        name:'报名截止时间',
        data:'2020-09-18 12:20'
      },
      {
        id:2,
        link:'../../assets/start.png',
        name:'会议开始时间',
        data:'2020-09-18 12:20'
      },
      {
        id:3,
        link:'../../assets/end.png',
        name:'会议结束时间',
        data:'2020-09-18 12:20'
      },
      {
        id:4,
        link:'../../assets/limit.png',
        name:'人数上限',
        data:300
      },
      {
        id:5,
        link:'../../assets/address.png',
        name:'会议地点',
        data:'shanghai'
      },
      {
        id:6,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      }
      ,
      {
        id:7,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      },
      {
        id:8,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      },
      {
        id:9,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      },
      {
        id:10,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      },
      {
        id:12,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      },
      {
        id:13,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      },
      {
        id:14,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      },
      {
        id:15,
        link:'../../assets/hoster.png',
        name:'主办方',
        data:'hust'
      }
    ],

    // detail_data:[
    //  {
    //    id:1,
    //    registtime:'2020-09-18 12:20'
    //  },
    //  {
    //    id:2,
    //    starttime:'2020-09-18 12:20'
    //  },
    //  {
    //    id:3,
    //    endtime:'2020-09-18 12:20'
    //  },
    //  {
    //    id:4,
    //    memLimit:300
    //  },
    //  {
    //    id:5,
    //    hostPlace:'Shanghai'
    //  },
    //  {
    //    id:6,
    //    hoster:'HUST'
    //  }
    // ],

    canRegist:true,
    hasRegisted:true,
    hasEnd:false
  },

  onLoad: function (options) {

  },

  itemChange(e)
  {
    let currentIndex = e.currentTarget.dataset.index.id;
    let tabBar = this.data.tabbar;
    for(let i in tabBar)
    {
      if(tabBar[i].id==currentIndex)
      {
        tabBar[i].isActive=true;
      }
      else
      {
        tabBar[i].isActive=false;
      }
    }
    this.setData({
      tabbar:tabBar
    })
  }

})
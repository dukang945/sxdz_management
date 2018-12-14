<template>
  <div>
    <div class="handle-box">
      <el-button type="primary" @click="delAll">批量删除</el-button>
      <el-button type="primary" @click="AddVisible = true">新增</el-button>
      <el-dialog title="新增" :visible.sync="AddVisible" width="30%" :before-close="handleClose">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
            <el-input v-model="formLabelAdd.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="formLabelAdd.link"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelAdd.type"></el-input>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="化妆水平">
            <el-select v-model="value" placeholder="请选择">
              <el-option value="小白, 入门学习中">小白, 入门学习中</el-option>
              <el-option value="入门, 进阶学习中">入门, 进阶学习中</el-option>
              <el-option value="大神, 猎奇新妆容">大神, 猎奇新妆容</el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="AddVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleAdd">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <el-table
      :data="tableData3"
      border
      style="width: 90%"
      @selection-change="handleSelectionChange"
      current-row-key
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="名称">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="type" label="链接类型" width="120"></el-table-column>
      <el-table-column label="审核状态" width="300">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.isOnline">上线</el-tag>
          <el-tag type="danger" v-else>下线</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="手机号">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="化妆水平">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="用户生日">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="注册时间">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="最后登录时间">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          name: "化妆",
          type: "妆容教程",
          isOnline: "true",
          link: "1",
          pic: ""
        },
        {
          name: "化妆",
          type: "妆容教程",
          isOnline: "true",
          link: "2",
          url: ""
        }
      ],
      isOnline: true,
      multipleSelection: [],
      del_list: [],
      dialogVisible: false,
      AddVisible: false,
      labelPosition: "left",
      radio: "1",
      idx: -1,
      currentPage4: 4,
      value1: "",
      value: '',
      formLabelAlign: {
        date: "",
        name: ""
      },
      formLabelAdd: {
        type: "",
        name: "",
        isOnline: true,
        link: "",
        url: ""
      }
    };
  },
  methods: {
    // 编辑
    handleEdit(index, row) {
      this.idx = index;
      const item = this.tableData3[index];
      this.formLabelAlign = {
        type: item.type,
        name: item.name,
        link: item.link,
        url: item.url
      };
      this.dialogVisible = true;
    },
    //保存编辑
    saveEdit() {
      this.$set(this.tableData3, this.idx, this.formLabelAlign);
      this.dialogVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
    },
    //删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    online(index, rows) {
      rows.isOnline = !rows.isOnline;
      console.log(rows.isOnline);
    },
    // 新增
    handleAdd() {
      this.tableData3.push(this.formLabelAdd);
      this.AddVisible = false;
      this.$message.success(`添加成功`);
    },
    // 全选
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // 选中项
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 批量删除
    delAll() {
      const length = this.multipleSelection.length;
      for (let index = 0; index < length; index++) {
        const element = this.multipleSelection[index];
        const i = this.tableData3.indexOf(element);
        this.tableData3.splice(i, 1);
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin: 20px;
}
.el-table {
  margin-left: 20px;
}
.el-switch {
  margin-left: 10px;
}
</style>
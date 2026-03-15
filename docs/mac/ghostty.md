# 现代终端神器使用指南
你用 `brew install` 安装的这七个工具，可以说是目前终端界最受推崇的“全明星阵容”。单纯安装它们还不够，你需要进行一些简单的配置才能让它们发挥魔力。

以下是每个工具的详细介绍和使用方法：

## 1\. Zsh (Z Shell)

**这是什么：** macOS 默认的命令行解释器（Shell）。虽然系统自带了 Zsh，但通过 Homebrew 安装的是最新版本，功能更全，更新更及时。

**如何使用/配置：**

通常你需要把它设置为默认 Shell。在终端运行：

```
# 将 Homebrew 安装的 zsh 路径加入允许的 shell 列表中
sudo sh -c "echo $(brew --prefix)/bin/zsh >> /etc/shells"
# 切换默认 shell 为 Homebrew 版本的 zsh
chsh -s $(brew --prefix)/bin/zsh
```

_注：所有的终端配置（环境变量、别名等）都将写在你的 `~/.zshrc` 文件中。_

## 2\. Starship

**这是什么：** 一个极速、高度可定制的跨 Shell 提示符（Prompt）。它能让你的命令行左侧变得非常漂亮，并且只在需要时显示有用的信息（比如当前所在的 Git 分支、Node.js/Python 版本、命令执行时间等）。

**如何配置：**

打开你的终端配置文件：`nano ~/.zshrc`，在文件末尾添加：

```
eval "$(starship init zsh)"
```

**如何使用：**

配置生效后（重启终端或运行 `source ~/.zshrc`），你会立刻看到提示符变样了。当你 `cd` 进入一个 Git 仓库时，它会自动显示分支名和修改状态。

## 3\. Lazygit

**这是什么：** 终端里的 Git 图形化界面（TUI）。如果你觉得敲 `git add`, `git commit`, `git push` 太繁琐，Lazygit 绝对会让你惊艳。

**如何使用：**

1.  在终端中进入任意一个 Git 仓库目录。
    
2.  输入命令 `lazygit` 并回车。
    
3.  **快捷键操作**：
    
    -   使用上下方向键（或 `j`/`k`）在文件间导航。
        
    -   按 `空格键` (Space) 暂存/取消暂存文件（等同于 git add）。
        
    -   按 `c` 键直接弹出输入框写 Commit message。
        
    -   按 `P` (大写) 推送到远程仓库，按 `p` (小写) 拉取代码。
        
    -   按 `q` 退出。
        

## 4\. Yazi

**这是什么：** 一个用 Rust 编写的终端文件管理器，速度极快，支持极其丰富的预览功能（甚至能在支持的终端如 Ghostty/Kitty 里直接预览图片和视频缩略图）。

**如何使用：**

1.  在终端输入 `yazi` 启动。
    
2.  **操作方式（类似 Vim）**：
    
    -   `h` (左) 返回上级目录，`l` (右) 进入文件夹。
        
    -   `j` (下), `k` (上) 上下选择文件。
        
    -   按 `/` 进行搜索。
        
    -   按 `q` 退出。
        

## 5\. fzf (Fuzzy Finder)

**这是什么：** 命令行通用模糊查找器。这是终端里最强大的工具之一，它可以用来快速搜索文件、历史命令、进程等任何文本。

**如何配置：**

安装完成后，必须运行 fzf 的绑定脚本来启用快捷键：

```
$(brew --prefix)/opt/fzf/install
```

（全部按 `y` 同意即可）。

**如何使用：**

-   **查文件**：在终端按 `Ctrl + T`，会弹出一个搜索框，输入拼音首字母或部分文件名，选中后会把路径自动粘贴到命令行。
    
-   **结合命令**：你想用 vim 打开某个文件但不记得路径，只需输入 `vim **` 然后按 `Tab` 键，就会唤出 fzf 让你搜索并选择文件。
    
-   **裸用**：直接输入 `fzf`，选中的文件路径会被输出。
    

## 6\. zoxide

**这是什么：** 更智能的 `cd` 命令（用 Rust 编写）。它会记住你经常访问的目录。比如你经常去 `/Users/molt/Documents/Projects/my-app`，以后你只需输入 `z app` 就能瞬间跳过去。

**如何配置：**

在 `~/.zshrc` 文件末尾添加：

```
eval "$(zoxide init zsh)"
```

**如何使用：**

-   替代 cd：`z 文件夹名字的一部分`（例如 `z doc` 直接跳到 Documents）。
    
-   交互式跳转：输入 `zi`，它会结合 fzf 弹出一个历史目录列表让你模糊搜索和选择。
    

## 7\. Atuin

**这是什么：** 你的 shell 历史命令记录神器。它用 SQLite 数据库替换了系统自带的简陋 history，支持用快捷键呼出全屏的历史记录搜索界面，甚至支持跨机器同步命令历史。

**如何配置：**

在 `~/.zshrc` 文件末尾添加：

```
eval "$(atuin init zsh)"
```

**如何使用：**

-   在终端中按 `向上方向键` (Up Arrow) 或 `Ctrl + R`。
    
-   此时不会像以前那样一行行往上翻，而是会弹出一个极其强大的搜索界面。直接输入你以前敲过的命令片段，回车即可执行。
    

## 🛠 进阶必要步骤

### 安装 Nerd Fonts 字体

**作用：** 为了让 Starship 和 Yazi 的图标（如文件夹图标、Git 分支图标）正常显示而不出现乱码方块，你需要安装支持图标的字体。

**操作：**

```
brew install --cask font-jetbrains-mono-nerd-font
```

安装后，记得在 **Ghostty** 的设置里将字体设置为 `JetBrainsMono Nerd Font`。

### 启动 Atuin 服务

**作用：** 运行 `brew services start atuin` 让它在后台平稳运行，确保它能实时同步和索引你的命令历史，保证搜索瞬间响应。

**操作：**

```
brew services start atuin
```

## 🚀 终极配置总结

为了让这些工具（Starship, Zoxide, Atuin）生效，请**手动**在你的 `~/.zshrc` 文件末尾添加这三行：

```
eval "$(starship init zsh)"
eval "$(zoxide init zsh)"
eval "$(atuin init zsh)"
```

**注意：** 请勿在配置文件内部写 `echo` 命令或 `source ~/.zshrc`，否则会导致终端启动死循环。修改完成后，直接重启终端即可。
